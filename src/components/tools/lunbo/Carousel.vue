<template>
  <!--走马灯的最外层包裹div-->
  <div class="el-carousel"
    :class="{ 'el-carousel--card': type === 'card' }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div class="el-carousel__container" :style="{ height: height }">
      <!--左边的切换箭头-->
      <transition name="carousel-arrow-left">
        <button
          type="button"
          v-if="arrow !== 'never'"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)"
          class="el-carousel__arrow el-carousel__arrow--left">
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <!--右边的切换箭头-->
      <transition name="carousel-arrow-right">
        <button
          type="button"
          v-if="arrow !== 'never'"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)"
          class="el-carousel__arrow el-carousel__arrow--right">
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
        <!--幻灯片内容显示区域-->
      <slot></slot>
    </div>
    <!--底部的指示器列表，点击或hover时切换幻灯片-->
    <ul
      class="el-carousel__indicators"
      v-if="indicatorPosition !== 'none'"
      :class="{ 'el-carousel__indicators--labels': hasLabel, 'el-carousel__indicators--outside': indicatorPosition === 'outside' || type === 'card' }">
      <li
        v-for="(item, index) in items"
        class="el-carousel__indicator"
        :class="{ 'is-active': index === activeIndex }"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
        :key="index">
        <button class="el-carousel__button"><span v-if="hasLabel">{{ item.label }}</span></button>
      </li>
    </ul>

  </div>
</template>

<script>
 //throttle节流函数
import throttle from 'throttle-debounce/throttle';
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';

export default {
  name: 'ElCarousel',

  props: {
    initialIndex: { //初始状态激活的幻灯片的索引，从 0 开始
      type: Number,
      default: 0
    },
    height: String, //走马灯的高度
    trigger: { //指示器的触发方式
      type: String,
      default: 'hover'
    },
    autoplay: { //是否自动切换
      type: Boolean,
      default: true
    },
    interval: { //自动切换的时间间隔，单位为毫秒
      type: Number,
      default: 3000
    },
    indicatorPosition: String, //指示器的位置
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {  //切换箭头的显示时机 always/hover/never
      type: String,
      default: 'hover'
    },
    type: String, //走马灯的类型,card
    loop: {  //是否循环显示
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      items: [],  //幻灯片数组
      activeIndex: -1, //标识当前幻灯片索引
      containerWidth: 0,
      timer: null,
      hover: false //记录当前鼠标的移入状态
    };
  },

  computed: {
    hasLabel() {
      return this.items.some(item => item.label.toString().length > 0);
    }
  },

  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      this.$emit('change', val, oldVal);
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    }
  },

  methods: {
    // 当鼠标移入
    handleMouseEnter() {
      // 当鼠标移入时，清空幻灯片播放的定时器，暂停自动切换。
      this.hover = true;
      this.pauseTimer();
    },
    // 当鼠标移出
    handleMouseLeave() {
      //  当鼠标移出，设置幻灯片自动播放定时器
      this.hover = false;
      this.startTimer();
    },

    itemInStage(item, index) {
      const length = this.items.length;
      // 满足当前为最后一个幻灯片；当前幻灯片在场景内；第一个幻灯片激活状态；
      //  或者 满足 当前幻灯片在场景内；当前幻灯片后面有至少一个项目；当前幻灯片后面一个项目处于激活状态
      if (index === length - 1 && item.inStage && this.items[0].active ||
        (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active ||
        (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
        return 'right';
      }
      return false;
    },
    // 当鼠标移入左边的切换幻灯片的按钮
    handleButtonEnter(arrow) {
      this.items.forEach((item, index) => {
        if (arrow === this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },

    handleButtonLeave() {
      this.items.forEach(item => {
        item.hover = false;
      });
    },
    // 将所有的幻灯片放入items数组中
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
    },
    //  重置幻灯片位置
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },
    //改变当前的幻灯片
    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    pauseTimer() {
      // 清空定时器
      clearInterval(this.timer);
    },

    startTimer() {
      //  如果自动切换的时间间隔小于等于0时，或者用户未设置自动播放时，直接返回，幻灯片不自动播放
      if (this.interval <= 0 || !this.autoplay) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    //设置当前页
    setActiveItem(index) {
      // 如果index是字符串，则是用户设置了幻灯片的name
      if (typeof index === 'string') {
        // 找到对应name的幻灯片
        const filteredItems = this.items.filter(item => item.name === index);
        // 如果找到的items长度大于0，取第一个的索引作为我们要使用的索引
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      // 索引转成数字
      index = Number(index);
      // 如果索引不是数字，或者不是整数
      if (isNaN(index) || index !== Math.floor(index)) {
        // 如果不是生产环境下，就报warn
        process.env.NODE_ENV !== 'production' &&
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }
      // 获取幻灯片数组的长度
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      // 如果索引小于0，判断是否设置循环播放，如果设置了，设置当前页为最后一页；也就是在向前切换到第一张，继续向前切换显示最后一张，然后显示倒数第二张
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) { //如果索引大于数组长度，判断是否设置循环播放，如果设置了，设置当前页为第一页；也就是在向后切换到最后一张时，继续向后切换显示第一张，然后显示第二张
        this.activeIndex = this.loop ? 0 : length - 1;
      } else { //否则，当前页设置为索引页
        this.activeIndex = index;
      }

      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },

    next() {
      this.setActiveItem(this.activeIndex + 1);
    },

    handleIndicatorClick(index) {
      this.activeIndex = index;
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  },

  created() {
    // throttle节流函数，点击频率控制，返回函数连续调用时   http://npm.taobao.org/package/throttle-debounce
    // 第二个参数noTrailing，当其设置为true时，保证函数每隔delay时间只能执行一次，如果设置为false或者没有指定，则会在最后一次函数调用后的delay时间后重置计时器。
    this.throttledArrowClick = throttle(300, true, index => {
      this.setActiveItem(index);
    });
    this.throttledIndicatorHover = throttle(300, index => {
      this.handleIndicatorHover(index);
    });
  },

  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetItemPosition);
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },

  beforeDestroy() {
    if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
  }
};
</script>
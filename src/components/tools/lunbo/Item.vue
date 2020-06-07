<template>
  <!--单个的幻灯片html结构-->
  <div v-show="ready" class="el-carousel__item"
    :class="{
      'is-active': active,
      'el-carousel__item--card': $parent.type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }"
    @click="handleItemClick"
    :style="{
      msTransform: `translateX(${ translate }px) scale(${ scale })`,
      webkitTransform: `translateX(${ translate }px) scale(${ scale })`,
      transform: `translateX(${ translate }px) scale(${ scale })`
    }">
    <div v-if="$parent.type === 'card'" v-show="!active" class="el-carousel__mask"></div>
    <!--幻灯片的自定义内容以插槽的方式显示在此区域-->
    <slot></slot>
  </div>
</template>

<script>
  const CARD_SCALE = 0.83;
  export default {
    name: 'ElCarouselItem',

    props: {
      name: String, //幻灯片的名字，可用作 setActiveItem 的参数
      label: { //该幻灯片所对应指示器的文本
        type: [String, Number],
        default: ''
      }
    },

    data() {
      return {
        hover: false,
        translate: 0, //偏移量设置
        scale: 1,
        active: false,
        ready: false,
        inStage: false,
        animating: false
      };
    },

    methods: {
      processIndex(index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
            //当前是activeIndex是第一张，index是最后一张，返回-1，相差-1，表示二者相邻且在左侧
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          //当前页activeIndex是最后一张，index是第一张，返回length，相差1，表示二者相邻且在右侧
          return length;
        } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
            // 如果，index在activeIndex前一页的前面，并且之间的间隔在一半页数即以上，则返回页数长度+1，这样它们会被置于最右侧
          return length + 1;
        } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
            // 如果，index在activeIndex后一页的后面，并且之间的间隔在一般页数即以上，则返回-2，这样它们会被置于最左侧
          return -2;
        }
        return index;
      },

      calculateTranslate(index, activeIndex, parentWidth) {
        if (this.inStage) {
          return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
        } else if (index < activeIndex) {
          return -(1 + CARD_SCALE) * parentWidth / 4;
        } else {
          return (3 + CARD_SCALE) * parentWidth / 4;
        }
      },
      // 这是用来移动幻灯片。
      translateItem(index, activeIndex, oldIndex) {
        // 获取父组件的宽度
        const parentWidth = this.$parent.$el.offsetWidth;
        // 获取幻灯片数组的长度
        const length = this.$parent.items.length;
        // 如果不是card模式
        if (this.$parent.type !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2 && this.$parent.loop) {
          // 对当前索引进行处理
          index = this.processIndex(index, activeIndex, length);
        }
        if (this.$parent.type === 'card') {
          this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
          this.active = index === activeIndex;
          this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
          this.scale = this.active ? 1 : CARD_SCALE;
        } else {
          this.active = index === activeIndex;
          // 设置幻灯片的偏移量
          this.translate = parentWidth * (index - activeIndex);
        }
        this.ready = true;
      },

      handleItemClick() {
        const parent = this.$parent;
        if (parent && parent.type === 'card') {
          const index = parent.items.indexOf(this);
          parent.setActiveItem(index);
        }
      }
    },

    created() {
      this.$parent && this.$parent.updateItems();
    },

    destroyed() {
      this.$parent && this.$parent.updateItems();
    }
  };
</script>
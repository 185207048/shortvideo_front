<template>
  <div>
    <div class="s_space">
      <div class="wrapper">
        <div class="col_1">
          <div class="section i_pin_v">
            <div class="be_tab">
              <ul class="be_tab_inner">
                <li>
                  <span>我的粉丝会看到</span>
                </li>
                <li>
                  <span>新访客会看到</span>
                </li>
              </ul>
            </div>
            <div class="be_pin_part">
              <div class="content">
                <div class="empty_set"></div>
              </div>
            </div>
          </div>
          <div class="section vedio">
            <h3>
              <a href>我的视频</a>
            </h3>
          </div>
          <div class="section fav">
            <h3>
              <a href>我的收藏夹</a>
            </h3>
            <div class="content">
              <div class="fav_item">
                <img
                  src=""
                  alt
                />
                <div class="m">
                  <span>默认收藏夹</span>
                </div>
              </div>
              <div class="fav_item">
                <img
                  src=""
                  alt
                />
                <div class="m">
                  <span>非正常收藏夹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col_2">
          <div class="section i_m">
            <div class="r1">
              <a href>
                <span></span>
              </a>
            </div>
            <div class="r2"></div>
          </div>
          <div class="section i_ann">
            <h3>公告</h3>
            <div class="content">
              <textarea name id placeholder="编辑我的空间公告" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.s_space {
  width: 100%;
  height: 700px;
  .wrapper {
    width: 1280px;
    height:700px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .col_1 {
      width: 922px;
      border: 1px solid #eee;
      padding: 15px 20px;
      background-color: #fff;
      h3 {
        padding-bottom: 15px;
      }
      .i_pin_v {
        width: 880px;
        height: 237px;
        padding-bottom: 20px;
        .be_tab {
          width: 880px;
          height: 26px;
          border-bottom: 1px solid #eee;
          margin-bottom: 15px;
          .be_tab_inner {
            li {
              float: left;
              padding-bottom: 5px;
              list-style: none;
              margin-right: 30px;
            }
          }
        }
        .be_pin_part {
          .content {
            width: 880px;
            height: 175px;
            .empty_set {
              width: 280px;
              height: 175px;
              border: 2px dashed #b8c0cc;
            }
          }
        }
      }
      .vedio {
        width: 880px;
        height: 51px;
      }
      .fav {
        width: 880px;
        height: 269px;
        .content {
          height: 217px;
          display: flex;
          .fav_item {
            width: 154px;
            height: 189px;
            margin: 0 20px 28px 0;
            img {
              width: 154px;
              height: 154px;
              border: 1px solid #eee;
              margin-bottom: 11px;
              border-radius: 4px;
            }
            .m {
              width: 154px;
              height: 24px;
            }
          }
        }
      }
    }
    .col_2 {
      width: 350px;
      height: 700px;
      background-color: #f7f7f7;
      .i_m {
        height: 125px;
        .r1 {
          height: 52px;
          text-align: center;
          padding: 0 10px 13px;
          text-align: center;
          span {
            display: block;
            margin: auto;
            width: 120px;
            height: 34px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .r2 {
          height: 38px;
          border: 1px solid #e5e9ef;
          border-radius: 4px;
          padding: 7px 0;
        }
      }
      .i_ann {
        height: 260px;
        h3 {
          border-bottom: 1px solid #e5e9ef;
          font-size: 14px;
          font-weight: 700;
          padding: 0;
          margin: -15px 0 10px;
          height: 45px;
          line-height: 45px;
          width: 308px;
          height: 46px;
        }
        .content{
          width: 328px;
          height: 194px;
          textarea{
            width: 306px;
            height: 172px;
            color: #6d757a;
            font-size: 12px;
            font-family: Microsoft Yahei;
            line-height: 20px;
            padding: 10px;
            margin: -10px 0 0 -11px;
            border: 1px solid transparent;
            border-radius: 4px;
            box-sizing: content-box;
          }
        }
      }
      .section {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 15px 20px 18px;
        margin-bottom: 10px;
      }
    }
  }
}
.section {
  border-bottom: 1px solid #eee;
  margin-bottom: 17px;
  position: relative;
}
</style>
  
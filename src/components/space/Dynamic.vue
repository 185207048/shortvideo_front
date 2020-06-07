<template>
  <div style="width:100%;height:289px">
    <div class="wrapper">
      <div class="col_1">
        <div class="card">
          <a href class="user_head"></a>
          <div class="main_content">
            <div class="comment_name">
              <a href>aaaa</a>
            </div>
            <div class="comment_date">
              <a href>11小时</a>
            </div>
            <div class="comment_content">测试</div>
            <div class="button_bar">
              <div class="single_button">转发</div>
              <div class="single_button">评论</div>
              <div class="single_button">赞</div>
            </div>
          </div>
        </div>
        <div class="no_more">
          <img src="" alt />
        </div>
      </div>
      <div class="col_2">
        <div class="section">
            <div class="content">
                <span>仅自己可见</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.wrapper {
  width: 1280px;
  height: 289px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .col_1 {
    width: 920px;
    .card {
      height: 159px;
      background-color: #fff;
      position: relative;
      .user_head {
        display: inline-block;
        position: absolute;
        left: 24px;
        top: 24px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      .main_content {
        width: 534px;
        height: 157px;
        margin-left: 88px;
        padding-top: 27px;
        .comment_name {
          width: 80px;
          height: 20px;
          font-size: 16px;
        }
        .comment_date {
          width: 534px;
          height: 24px;
          padding-top: 4px;
          font-size: 12px;
        }
        .comment_content {
          width: 534px;
          height: 32px;
          margin-top: 10px;
        }
        .button_bar {
          width: 534px;
          height: 44px;
          .single_button {
            display: inline-block;
            width: 92px;
            font-size: 12px;
            line-height: 44px;
          }
        }
      }
    }
    .no_more {
      height: 130px;
      display: flex;
      justify-content: center;
    }
  }
  .col_2 {
    width: 350px;
    height: 162px;
    background-color: #fff;
    .section {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 162px;
      padding: 15px 20px 18px;
      margin-bottom: 10px;
      .content{
          width: 308px;
          height: 51px;
          padding-bottom: 15px;
          span{
              display: inline-block;
              height: 34px;
              line-height: 34px;
          }
      }
    }
  }
}
</style>
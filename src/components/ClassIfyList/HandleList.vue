<template>
  <div class="cate-Container">
    <div class="cateLeft">
      <ul class="cateLeft-list">
        <li v-for="item in result">
          <a href>双11专区</a>
        </li>
      </ul>
    </div>
    <div class="cateRight">
      <div class="banner">
        <img
          src="https://yanxuan.nosdn.127.net/fcb646136cabf0b597d41e459de631df.jpg?imageView&thumbnail=0x196"
          alt
        />
      </div>
      <div class="cateRight-list clearfix">
        <ul>
          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>

          <li class="cateItem">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/69f9f31c999d206dac976b75af5e7128.png?imageView&quality=85&thumbnail=144x144"
                alt
              />
              <p>精选好物15元起</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    result() {
		return this.queryResult();
	}
  },
  methods: {
    queryResult() {
     
      let data = this.$store.state.classifyData;
      return data;
	},
  created() {
    this.$store.dispatch("classify/" + types.CUSTOM_QUERY_LIST)
  }
}}
</script>
<style lang="less" scoped>
.cate-Container {
  width: 100%;
  margin-top: 1rem;

  .cateLeft {
    float: left;
    width: 20%;
    padding: 0.53rem 0;
    .cateLeft-list > li {
      width: 1.62rem;
      height: 0.67rem;
      margin-bottom: 0.4rem;
      text-align: center;
      font-size: 0.26rem;
      a {
        color: #333;
      }
    }
  }
  .cateRight {
    float: left;
    width: 80%;
    padding: 0.4rem 0.4rem 0.28rem;
    box-sizing: border-box;
    .banner {
      width: 100%;
      margin-bottom: 0.42rem;
      img {
        width: 100%;
      }
    }
    .cateRight-list .cateItem {
      float: left;
      width: 28%;
      margin-left: 0.25rem;
      text-align: center;

      a {
        color: #333;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
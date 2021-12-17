﻿<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-content">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div style="margin-bottom: 1.25rem">
            <img width="25" src="" alt="Logo">
            <span class="h5 text-white" style="margin-left: .75rem">Powered by Double-A Chain</span>
          </div>
          <p class="text-white">
            {{$t('footer.title')}}
          </p>
          <div>
            <el-tooltip class="item" effect="dark" :content="$t('footer.mode')" placement="top">
              <el-button type="text">
                <button  type="button" class="btn btn-sm btn-icon btn-soft-light" @click="onSwitchChange">
                  <i  Class="fa fa-moon"></i></button>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="$t('footer.contact')" placement="top">
              <el-button type="text">
                <a class="btn btn-sm btn-icon btn-soft-light icon-center" href="">
                  <i  Class="fa fa-envelope"></i>
                </a>
              </el-button>
            </el-tooltip>
          </div>
        </div>
        <!-- <div class="col-6 col-md-4 col-lg-2">
          <h4 class="h6 text-white footer-item-title">Company</h4>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h4 class="h6 text-white footer-item-title">Community</h4>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h4 class="h6 text-white footer-item-title">Products</h4>
        </div> -->
      </div>
      <!-- <hr style="opacity: .2;">
      <div class="row footer-bottom">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 text-md-right">
          <ul class="footer-icon" style="margin-bottom: 0">
            <li >
              <el-tooltip class="item" effect="dark" content="Contact Us" placement="top">
                <el-button type="text">
                  <a class="btn btn-sm btn-icon btn-soft-light btn-pill" href="javascript:;">
                    <i class="far fa-envelope btn-icon__inner"></i>
                  </a>
                </el-button>
              </el-tooltip>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="Twitter" placement="top">
                <el-button type="text">
                  <a class="btn btn-sm btn-icon btn-soft-light btn-pill" href="javascript:;" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-twitter btn-icon__inner"></i>
                  </a>
                </el-button>
              </el-tooltip>
            </li>
            <li >
              <el-tooltip class="item" effect="dark" content="Medium" placement="top">
                <el-button type="text">
                  <a class="btn btn-sm btn-icon btn-soft-light btn-pill" href="javascript:;" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-medium btn-icon__inner"></i>
                  </a>
                </el-button>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters([
        'nightMode'
      ])
    },
    data() {
      return {
        input1: '',
        value: this.$store.getters.nightMode,
        toggleFlag: false,
        mobile: false,
        activeIndex: 0,
        subTitleIndex: 0
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handleClick(index) {
        this.activeIndex = index
      },
      hover(index) {
        this.subTitleIndex = index
      },
      onSwitchChange() {
        const nightMode = !this.$store.getters.nightMode;
        this.$store.dispatch('SwitchMode', nightMode).then(() => {

        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" >
  .footer{
    background-color: #233370;
    padding: 1.25rem 0;
    .footer-content{
      padding: 0.5rem 0;
    }
    .footer-item-title{
      position: relative;
      padding-bottom: .5rem;
      &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        border-bottom: 1px solid rgba(231,234,243,.2);
      }
    }
    .footer-ul{
      padding: 0;
      color: white;
      list-style: none;
      margin: 0;
      .footer-ul-li{
        color: hsla(0,0%,100%,.7);
        padding: .35rem 0;
        display: inline-block;
        font-size: .71094rem;
        &:hover{
          color: #fff;
        }
      }
    }
    .footer-bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-icon {
      display: flex;
      flex-direction: row-reverse;
      li{
        padding: 0;
        padding-left: 0.4rem;
        button{
          padding: 0;
        }
      }
    }
    .icon-center {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 768px){
      .footer-content {
        -ms-flex-pack: justify ;
        -webkit-box-pack: justify ;
        justify-content: space-between;
      }
    }
  }
  .app-main {
     .footer{
       background-color: #222838;
     }
  }
</style>

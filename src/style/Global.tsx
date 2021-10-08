import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
 

* {
  font-family: 'HelveticaNeue';
}
body {
  background-color: ${({ theme }) => theme.colors.background};

  img {
    height: auto;
    max-width: 100%;
  }
  .main-wrapper{
    background: transparent linear-gradient(180deg, #2942AAE5 0%, #4E1F75D4 54%, #0F1953 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
     > div {
      > div {
        > div{
          >div:last-child {
            display: none;
          }
        }
      }
     }
    .text-color{
      color: #16D6B0 !important;
    }
    .main-menu {
        position: absolute;
        top: 45px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        padding: 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 250px;
        .logo {
          color: #fff;
          font-size: 30px;
          position: relative;
          z-index: 9999;
        }
        ul{
          display: flex;
          list-style: none;
          z-index: 99;
          li{
            margin-right: 60px;
            position: relative;
            a{
              font-size: 18px;
              color: #fff;
              &:hover{
                color:#16D6B0;
                .menu-icon{
                  display:none;
                  &.active{
                    display: inline-block !important;
                  }
                }
                &:before{
                  content: '';
                  position: absolute;
                  height: 2px;
                  width: 100%;
                  left: 0;
                  background: #16D6B0;
                  bottom: -5px;
                }
              }
              img{
                margin-right: 5px;
              }
            }
          }
        }
    }
  
    nav{
      max-width: 1280px;
      left: 0;
      right: 0;
      margin: 30px auto 0;
      background: transparent;
      border: none;
      justify-content: end;
      .hbSutu{
        position:relative;
      }
      > div:first-child{
          display:none;
        }
      > div:nth-child(2){
        > div {
          display: none;
        }
        > div.sncQl {
          display: flex;
          &+ div{
            display:block;
          }
        }
      } 
      a[aria-label="Pancake home page"] {
        display: none;
      }
      
    }
    // &> div:nth-child(1) > div:nth-child(2) > div:nth-child(1)  {  
    //   display: none;
    //   &+div{
    //       margin-left: 0;
    //       max-width: calc(100% - 0px);
    //       margin-right: 0;
    //       margin-top: 0;
    //       position: relative;
    //       z-index: 9;
    //     }
    // } 
    .section-heading{
      font-size: 30px;
    }
    .heading-descr{
      font-size: 18px;
      max-width: 900px;
    }
    .banner-content{
      margin-bottom: 20px;
      .heading-descr{
        margin-bottom: 50px;
      }
    }
    .how-to-play{
      .section-heading{
        font-weight: normal;
      }
      .heading-descr{
        margin: 25px auto 0;
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 21px;
      }
    }
    .steps-wrapper{
      width: 100%;
      margin-top: 50px;
      .step{
        padding: 0 20px;
        text-align: center;
        color: #fff;
        .image{
          margin: 30px 0;
        }
        h3{
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: normal;

        }
        p{
          font-size: 18px;
          line-height: 21px;
        }
      }
    }
    .multiple-tickets{
      text-align: center;
      margin-top: 100px;
      font-size: 18px;
      .title {
        color: #16D6B0;
        font-size: 18px;
      }
      p{
        margin: 20px 0;
        font-size: 18px;
        line-height: 21px;
        color: #FFF;
      }
      ul{
        list-style:none;
        li{
          font-size: 18px;
          color: #FFF;
          margin-bottom: 5px;
        }
      }
    }
    .connect-btn{
      background:  transparent linear-gradient(90deg, #15D9AC 0%, #1CC0CE 100%) 0% 0% no-repeat padding-box;
      font-size: 18px;
      border-radius: 30px;
      padding: 15px 30px;
      height: 50px;
    }
    .lottery-banner{
      padding: 100px 0;
      margin-top: 50px;
      h3{
        font-size: 18px;
        color: #fff;
        font-weight: normal;
      }
      .tickets{
        font-size: 18px;
        font-weight: 500;
      }
      .time{
        font-size: 30px;
        color: #FDC02A;
        margin-right:5px;
        font-weight: bold;
      }
      h2{
        font-size: 30px;

      }
    }
    .connect-section{
      h3{
        font-size: 18px;
        color: #fff;
        margin-bottom: 50px;
      }
      .connect-btn{
        background: #FDC02A;
        border-radius: 12px;
        color: #585858;
      }
    }
    .swtich-tab >div {
      background: #D1D1D140;
      border-radius: 40px;
      border: none;
      button{
        color: #fff;
        background:#16D6B0;
        border-radius: 40px;
        font-size: 18px;
        padding: 0 60px;
        + button{
          background: transparent;
          color: #D0CACA;
        }
      }
      
    }
    .footer-section {
      /* height: 100px; */
      padding: 0;
      .social-links {
        display: flex;
        width: 100%;
        justify-content: end;
        ul{
          display: flex;
          list-style: none;
          gap: 60px
        }
      }
    }
    .custom-btn{
      background: #fff;
      color: #585858;
      opacity: 1;
      border-radius: 30px;
      height: 50px;
      text-decoration: none;
      border: none;
      padding: 15px 30px;
      &:hover{
        text-decoration: none;
        border: none;
        opacity: 1;
      }
    }
    .fpXoah:hover{
      text-decoration: none;
    }
    .winning-section{
      .section-heading{
        font-weight: normal;
      }
    }
    .prize-section{
      .section-heading{
        font-weight: normal;
      }
    }
     
    @media screen and (max-width: 851px){
      .gKnNVk {
        margin-top: 130px;
      }
      .main-menu{
        .logo{
          font-size: 22px;
        }
        ul{
          li{
            a{
              font-size: 16px;
            }
          }
          margin-top: 105px;
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          justify-content: center;
        }
      }
      .connect-btn{
        font-size: 14px;
        height: 40px;
      }
      .section-heading {
        font-size: 18px;
      }
      .heading-descr{
        font-size: 16px;
      }
      .banner-content{
        .connect-btn{
          font-size: 15px;
          height: 40px;
        }
        .custom-btn{
          font-size: 15px;
          height: 40px;
        }
      }
      .how-to-play{
        .section-heading{
          font-size: 24px;
        }
        .heading-descr{
          font-size: 18px;
          p{
            margin-bottom: 20px;
          }
        }
        .steps-wrapper{
          .step{
            margin-bottom: 60px;
            .number{
              font-size: 16px;
            }
          }
        }
      }
      .winning-section{
        .section-heading{
          font-size: 30px;
        }
      }
      .prize-section{
        .section-heading{
          font-size: 30px;
        }
      }
      .multiple-tickets{
        margin-top: 80px;
      }
      .footer-section {
        .social-links{
          justify-content: center;
        }
        padding-bottom: 20px;
      }
      .bxenQI{
        display:none;
      }
    }
    @media screen and (max-width: 500px){
      .main-menu{
        .logo{
          font-size: 20px;
        }
        ul{
          li{
            a{
              font-size: 15px;
            }
          }
        }
      }
      .connect-btn{
        font-size: 12px;
        height: 35px;
      }
      .section-heading {
        font-size: 16px;
      }
      .heading-descr{
        font-size: 16px;
      }
      .banner-content{
        .connect-btn{
          font-size: 14px;
          height: 40px;
        }
        .custom-btn{
          font-size: 14px;
          height: 40px;
        }
      }
      
    }
    
  }
  
}
`

export default GlobalStyle

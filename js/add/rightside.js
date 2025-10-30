document.addEventListener('DOMContentLoaded', function () {
  let sbegin = () => {
    /*


    /////////////////////////////////////////////
    //                                         //
    //                                         //
    //    +   +                                //
    //   +++ +++                               //
    //  +++++++++                              //
    //    +++++            /\                 ///
    //     +++            /  \               / //
    //      +            /    \             /  //
    //                  /      \           /   //
    //                 /        \_________/    //
    //                /                        //
    //               /       \         /       //
    //              /       __\       /__      //
    //             /                           //
    //            /             ____           //
    //           /              \  /           //
    //          /     _~_        \/    _~_     //
    //         /     /  /             |   |    //
    //        /     /  /              |   |    //
    //       /     /  /               |   |    //
    /////////////////////////////////////////////

    */
  }
  Function.prototype.makeMulti = function () {
    let l = new String(this);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"))
    return l
  }
  console.log(sbegin.makeMulti())

  const rightSideFn = {
    showBtn: () => { // 点击展开
      if (window.innerWidth > 900) {
        document.getElementById('rightside-avatar-card').style.display = "inline-block"
        document.getElementById('rightside-menus').style.transform = "translateY(0)"
      }
      document.getElementById('rightside-childmenu-unfold').style.display = "none"
      document.getElementById('rightside-childmenu-fold').style.display = "inline-block"
      document.getElementById('rightside-childmenu-contents').style.visibility = "visible"
      document.getElementById('rightside-childmenu-comment').style.visibility = "visible"
    },

    hideBtn: () => { // 点击收起
      document.getElementById('rightside-avatar-card').style.display = "none"
      document.getElementById('rightside-childmenu-unfold').style.display = "inline-block"
      document.getElementById('rightside-childmenu-fold').style.display = "none"
      document.getElementById('rightside-menus').style.transform = "translateY(19.6rem)"
      document.getElementById('rightside-contents').style.display = "none"
      document.getElementById('rightside-childmenu-contents').style.background = "var(--card-bg)"
      document.getElementById('rightside-childmenu-contents').style.visibility = "hidden"
      document.getElementById('rightside-childmenu-comment').style.visibility = "hidden"
    },

    ShowOrHideContent: () =>{ //目录展开/关闭
      if (document.getElementById('rightside-contents').style.display == "inline-block") {
        document.getElementById('rightside-contents').style.display = "none"
        document.getElementById('rightside-childmenu-contents').style.background = "var(--card-bg)"
      }
      else {
        document.getElementById('rightside-contents').style.display = "inline-block"
        document.getElementById('rightside-childmenu-contents').style.background = "var(--btn-bg)"
      }
      event.stopPropagation()
    },

    scrollToTop: () => { // 回到顶部
      btf.scrollToDest(0, 500)
    }
  }

  document.getElementById('rightside').addEventListener('click', function (e) {
    const $target = e.target.id || e.target.parentNode.id
    switch ($target) {
      case 'rightside-childmenu-go-up':
        rightSideFn.scrollToTop()
        break
      case 'rightside-childmenu-unfold':
        rightSideFn.showBtn()
        break
      case 'rightside-childmenu-fold':
        rightSideFn.hideBtn()
        break
      case 'rightside-childmenu-contents':
        rightSideFn.ShowOrHideContent()
        break
      default:
        break
    }
  })

  // 补充：移动端点击目录外区域关闭目录
  document.addEventListener("click", function(event){
    if (document.getElementById('rightside-contents').style.display == "inline-block" && window.innerWidth <= 900)
      rightSideFn.ShowOrHideContent()
  })
  document.getElementById('rightside').addEventListener("click", function(event){
    event = event || window.event
    event.stopPropagation()
  })



  document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      new Vue({
        data:function(){
          this.$notify({
            title:"你干嘛啊！",
            message:"怎么能随随便便想扒我的底裤呢？",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"error"
          });
          return{visible:false}
        }
      })
      return false;
    }
  };

})

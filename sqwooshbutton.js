var yelBig = false;
var grnBig = false;

function toggleOr(target_area) {
  // alert('yelBig=' + yelBig + '|| grnBig=' + grnBig);
  if (target_area == "yellowtarget") {
    if (yelBig) { // make yellow SMALL
      yelBig = false;
      document.getElementById('yellowtarget').style.height = '150px';
      document.getElementById('yellowtarget').style.width = '150px';
      if (grnBig) { // green BIG
        document.getElementById('bluetarget').style.height = '150px';
        document.getElementById('bluetarget').style.width = '150px';
        document.getElementById('redtarget').style.height = '0';
        document.getElementById('redtarget').style.width = '300px';
      } else if (!grnBig) {
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '150px';
        document.getElementById('redtarget').style.height = '0';
        document.getElementById('redtarget').style.width = '150px';
      }
    } else if (!yelBig) { // make yellow BIG
      yelBig = true;
      document.getElementById('yellowtarget').style.height = '300px';
      document.getElementById('yellowtarget').style.width = '300px';
      if (grnBig) {
        document.getElementById('redtarget').style.height = '0px';
        document.getElementById('redtarget').style.width = '300px';
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '300px';
      } else if (!grnBig) { // green SMALL
        document.getElementById('redtarget').style.height = '150px';
        document.getElementById('redtarget').style.width = '150px';
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '300px';
      }
    }
  } else if (target_area == "greentarget") {
    if (grnBig) { // make green SMALL
      grnBig = false;
      document.getElementById('greentarget').style.height = '150px';
      document.getElementById('greentarget').style.width = '150px';
      if (yelBig) {
        document.getElementById('redtarget').style.height = '150px';
        document.getElementById('redtarget').style.width = '150px';
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '300px';
      } else if (!yelBig) {
        document.getElementById('redtarget').style.height = '0';
        document.getElementById('redtarget').style.width = '150px';
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '150px';
      }
    } else if (!grnBig) {
      grnBig = true;
      document.getElementById('greentarget').style.height = '300px';
      document.getElementById('greentarget').style.width = '300px';
      if (yelBig) {
        document.getElementById('bluetarget').style.height = '0';
        document.getElementById('bluetarget').style.width = '300px';
        document.getElementById('redtarget').style.height = '0';
        document.getElementById('redtarget').style.width = '300px';
      } else if (!yelBig) {
        document.getElementById('bluetarget').style.height = '150px';
        document.getElementById('bluetarget').style.width = '150px';
        document.getElementById('redtarget').style.height = '0';
        document.getElementById('redtarget').style.width = '300px';
      }
    }
  }
}
function makewhite() {
  document.body.style.backgroundColor = "#FFF";
  document.getElementsByName('theme-color')[0].setAttribute("content", "#FFF");
}

function makeblack() {
  document.body.style.backgroundColor = "#000";
  document.getElementsByName('theme-color')[0].setAttribute("content", "#000");
}

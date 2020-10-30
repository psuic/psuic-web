export default function getBrowser() {
  if (typeof window !== `undefined`) {
    if (
      (navigator.userAgent.indexOf('Opera') ||
        navigator.userAgent.indexOf('OPR')) != -1
    ) {
      return 'Opera'
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
      return 'Chrome'
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
      return 'Safari'
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
      return 'Firefox'
    } else if (
      navigator.userAgent.indexOf('MSIE') != -1 ||
      !!document.documentMode == true
    ) {
      //IF IE > 10
      return 'IE'
    } else {
      return 'unknown'
    }
  }
  return null
}


export function  getTitleFromPostCategories(posts){
  let headerSlug = undefined
  if (typeof window !== `undefined`) {
    headerSlug = _.chain(window.location.pathname).split("/").pull("").takeRight().get(0).value()
  }
  console.log(headerSlug);
  
  const title = _.chain(posts).head().get('categories').find({slug: headerSlug}).get('name').value()
  return title
}
export function  getTagFromURL(){
  let headerSlug = undefined
  if (typeof window !== `undefined`) {
    headerSlug = _.chain(window.location.pathname).split("/").pull("").value()
    console.log(headerSlug);
    
  }
  return headerSlug
}
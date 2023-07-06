import Script from 'next/script';
const page = () => {
  const domain = getDomain();
  return (
    <>
        <Script src={"https://tools.contrib.com/pages/staffing?d=agingrepair.com&container=staffing-script"}/>
        <div className="staffing-script"></div>
    </>
   
  )
}

export default page
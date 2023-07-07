import Image from 'next/image'

export default function Logo({domain,logo}) {
  if(logo!=null && logo!=''){
    return (
        <Image 
              src={logo}
              width={300}
              height={300}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            />
    )
  }else{
    return(
        <h2 className="tw-text-5xl tw-font-medium tw-text-blue-500">{domain}</h2>
    )
  }
}
import Image from "next/image"
import Script from "next/script"
export default function Home() {
  return (
    <>
      <section className="tw-bg-black tw-fixed tw-w-full tw-px-4 tw-py-2 text-white tw-z-10">
        <div className="container text-center tw-space-x-2">
          <strong className="tw-text-base">Contribute and become a DAO member, earn crypto rewards!</strong>
          <a href="" className="btn btn-success btn-sm lg:tw-py-[0.10rem!important] lg:tw-font-[500!important]">Inquire</a>
          <a href="" className="btn btn-danger btn-sm lg:tw-py-[0.10rem!important] lg:tw-font-[500!important]">Partner</a>
        </div>
      </section>
      <section className="tw-min-h-[calc(100vh-43px)] tw-py-14 tw-flex tw-w-full tw-items-center tw-justify-center tw-relative">
        <video className="tw-object-cover tw-w-[100vw] tw-h-[100vh] tw-fixed tw-top-0 tw-left-0" src="https://cdn.vnoc.com/videos/video-blockchain6.mp4" autoPlay loop playsInline muted></video>
        <div className="tw-bg-[rgba(6,13,19,.83)] tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
        <div className="container tw-relative text-white">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h2 className="tw-text-5xl tw-font-medium tw-text-blue-500">
                Agingrepair.com
              </h2>
              <h1 className="tw-font-medium tw-text-base lg:tw-text-6xl tw-break-words mb-3">
                Join our exclusive community of like minded people on agingrepair.com
              </h1>
              <h3 className="tw-text-white/75 tw-text-2xl tw-font-medium">
                Help us build out agingrepair.com with other great people around the world and earn Eshares, compensation and experience with other like minded people.
              </h3>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="tw-bg-[rgba(0,0,0,0.75)] tw-p-8 tw-rounded-lg">
                    <div className="">
                      <div className="input-group input-group-lg mb-3">
                        <input type="text" name="email" className="form-control" placeholder="Email address..." />
                        <button
                          className="btn btn-danger lg:tw-px-[3rem!important]"
                          type="button"

                        >Join The Wailist</button>
                      </div>
                      <div className="d-block text-danger small mt-2">
                        Email is required.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12 tw-bg-white tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center mb-3">
              <h5 className="tw-font-bold tw-text-2xl">
                This domain is backed by <a className="tw-no-underline" href="https://realtydao.com/" target="_blank">RealtyDao.com</a>
              </h5>
              <h1 className="tw-font-extrabold tw-text-5xl">
                rDAO Token Usage Info
              </h1>
            </div>
            <div className="col-xl-12 text-center">
              <Image
                src="https://cdn.vnoc.com/icons/realtydao/rdao-usage-feat.png"
                width={0}
                height={0}
                className="img-fluid tw-w-full"
                sizes="100vw"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12 tw-bg-[#ECF6FB] tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 tw-text-center">
              <h1 className="tw-font-extrabold tw-text-5xl tw-capitalize mb-3">
                Agingrepair.Com Latest Tasks
              </h1>
            </div>
            <div className="col-xl-12">
              <Script src="https://tools.contrib.com/eservice/blockchaintasks?d=agingrepair.com&container=blockchain-tasks" />
              <div className="blockchain-tasks"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

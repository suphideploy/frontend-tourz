import React from "react"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

const HeaderTop = () => {
  return (
<div className="border-b border-gray-200 hidden sm:block">
    <div className="container py-4">
      <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-1">
          <div className="header_top__icon_wrapper">
            <BsFacebook />
          </div>
          <div className="header_top__icon_wrapper">
            <BsTwitter />
          </div>
          <div className="header_top__icon_wrapper">
            <BsInstagram />
          </div>
          <div className="header_top__icon_wrapper">
            <BsLinkedin />
          </div>
        </div>
        <div className="text-gray-500 text-[12px]">
          TAKE ONLY <b>MEMORIES</b>,LEAVE ONLY <b>FOOTPRINTS</b>
        </div>
        <div className="flex gap-4  ">
            <select
              className="currency text-gray-500 text-[12px] w-[70px] border-transparent"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD</option>
              <option value="EUR €">EUR</option>
              <option value="INR">THB</option>
            </select>

            <select
              className="language text-gray-500 text-[12px] w-[80px] border-none"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>

    </div>
  </div>
</div>
  )
}

export default HeaderTop
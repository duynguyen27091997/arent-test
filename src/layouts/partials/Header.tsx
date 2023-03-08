import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "src/assets/logo.png";
import Dropdown from "src/components/common/Dropdown";
import ChallengeIcon from "src/components/icons/ChallengeIcon";
import CloseIcon from "src/components/icons/CloseIcon";
import InfoIcon from "src/components/icons/InfoIcon";
import MemoIcon from "src/components/icons/MemoIcon";
import MenuIcon from "src/components/icons/MenuIcon";

const Header = () => {
  const navigate = useNavigate();

  function navigateToColumn() {
    navigate("/columns");
  }

  return (
    <header>
      <nav className="bg-gray border-gray-200 ">
        <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-8 items-center ">
            <NavLink
              to="/records"
              className="text-orange dark:text-white text-sm  flex gap-1 items-center hover:underline"
            >
              <MemoIcon />

              <span className="text-white"> 自分の記録</span>
            </NavLink>
            <a
              href="#"
              className="text-orange dark:text-white text-sm  flex gap-1 items-center hover:underline"
            >
              <ChallengeIcon />

              <span className="text-white"> チャレンジ</span>
            </a>
            <a
              href="#"
              className="text-orange dark:text-white text-sm  flex gap-1 items-center hover:underline"
            >
              <div className="relative inline-flex ">
                <InfoIcon />

                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px]  bg-[#EA6C00] text-white  rounded-full -top-1 -right-1 ">
                  20
                </div>
              </div>

              <span className="text-white">お知らせ</span>
            </a>

            <div className="ml-8">
              <span className="cursor-pointer">
                <Dropdown
                  trigger={(open) => (!open ? <MenuIcon /> : <CloseIcon />)}
                  menu={[
                    <button key={1}>自分の記録</button>,
                    <button key={2}>体重グラフ</button>,
                    <button key={2}>目標</button>,

                    <button key={2}>選択中のコース</button>,
                    <button onClick={navigateToColumn} key={2}>
                      コラム一覧
                    </button>,
                    <button key={2}>設定</button>,
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

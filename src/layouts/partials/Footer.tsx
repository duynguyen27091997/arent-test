import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray mt-20">
      <div className="mx-auto max-w-screen-lg py-12">
        <ul className="flex flex-wrap gap-16 items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className=" hover:underline  ">
              会員登録
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline ">
              運営会社
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline">
              利用規約
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              個人情報の取扱について
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              特定商取引法に基づく表記
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              お問い合わせ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

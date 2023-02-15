import type { NextPage } from "next";

const Yuta: NextPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-md px-4 md:px-8 mx-auto">
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
          又野裕太 / Yuta Matano
        </h1>

        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
          こちらは又野裕太の自己紹介用、テストホームページです。
        </p>

        <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
          About me
        </h2>

        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
          又野裕太と申します。現在は東京大学経済学部に所属しており、学生経友会という組織とFITTY626というフットサルのサークルに所属しています。学問的な関心は数理統計学、ベイズ統計学及び機械学習とその周辺にあります。また、経済史、科学哲学といった分野にも関心があります。現在のところ、学部卒の時点での就職はせずに、大学院へ進学して、第一の関心分野である統計学の学習及び研究を行いたいと考えています。
        </p>

        <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
          <p>経歴</p>
          <li>2018.4-2021.3 大阪府立茨木高校</li>
          <li>2021.4-2023.3 東京大学文科二類</li>
          <li>2023.3- 東京大学経済学部</li>
        </ul>

        <blockquote className="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">
          小中高でサッカーをしており、大学ではフットサルを行っています。好きなチームはガンバ大阪と、マンチェスターユナイテッドです。サッカー以外のスポーツも含めてスポーツ観戦が好きです！
        </blockquote>

        <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
          YEConnectでやりたいこと
        </h2>

        <p className="text-gray-500 sm:text-lg">
          エンジニアリングを学ぶ。特に統計学を学習した後にテック企業でエンジニアリングを使うことができるような知識を身につける。
        </p>
      </div>
    </div>
  );
};

export default Yuta;
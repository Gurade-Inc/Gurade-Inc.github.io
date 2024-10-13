"use client";
import React, { useEffect, useState } from "react";
import Script from 'next/script';


function MainComponent() {
  const services = [
    {
      title: "データ分析",
      description: "あらゆるデータを価値に変換し、高度なビジネスインサイトを導く",
      achievements:
        "大手テック企業のビッグデータ分析、自治体関連データ分析、SNS/Youtube等のスクレイピングデータを用いたデータ分析など多数経験",
      addedValue:
        "「単なる示唆」にとどまらない意思決定に直結するデータ分析をお届けする",
      image:
        "./static/img/data_analysis.png", // Replace with actual path to image
    },
    {
      title: "機械学習モデル構築",
      description: "ビッグデータを用いて独自の機械学習モデルを構築する",
      achievements:
        "小売店舗の需要予測、ECサイトのレコメンデーション、クーポンの配布の最適化、教育現場の児童の行動予測など多数経験",
      addedValue: "精度と運用のバランスを保った現実的なモデルを開発する",
      image:
        "./static/img/machine_learning.png", // Replace with actual path to image
    },
    {
      title: "生成AIアプリケーション開発",
      description:
        "ChatGPT, Gemini, Claude等の生成AIを用いた業務効率化ツールを開発する",
      achievements:
        "会話の動画・音声データを用いた自動採点・添削AIツールの開発など多数経験。また、本HPも全て生成AIによって作成している",
      addedValue:
        "プロンプトエンジニアリングにとどまらず、各種サービスのAPIを用いて複雑な連携処理を可能にするプロダクトを提供する",
      image:
        "./static/img/generative_ai.png", // Replace with actual path to image
    },
    {
      title: "DXコンサル",
      description:
        "ビジネス価値を最大化するためテクノロジーの活用方法を提案する",
      achievements: "マーケティングコンサル事業社に対するDXコンサルなど多数経験",
      addedValue:
        "丁寧なヒアリングをもとに適切に構造分解をし、課題の発見、打ち手の方針を検討・整理する",
      image:
        "./static/img/dx.png", // Replace with actual path to image
    },
    {
      title: "インセンティブマーケティングコンサル",
      description: "ポイント・クーポン等を用いた集客施策の効果検証設計を行う",
      achievements: "大手テック企業におけるインセンティブ施策の設計など多数経験",
      addedValue:
        "高度な統計学の知識を用いることで、A/Bテストが不可能な状況においても、限りある条件下で最も妥当な検証を行う",
      image:
        "./static/img/incentive.png", // Replace with actual path to image
    },
    {
      title: "KPI設計コンサル",
      description:
        "プロダクトマネジメントおよびデータサイエンスのノウハウに基づき、事業戦略に即したKPI設計・マネジメント について検討のサポートをする",
      achievements: "大手テック企業におけるKPI設計など多数経験",
      addedValue:
        "単にKPIを作るだけでなく、データドリブンな意思決定が可能になる組織体制・運用から設計する",
      image:
        "./static/img/kpi.png", // Replace with actual path to image
    },
  ];

  const [popupContent, setPopupContent] = React.useState(null);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドの処理を明確にする
  useEffect(() => {
    setIsClient(true);  // クライアントサイドでのみ実行される
  }, []);

    
  const handleClick = (service) => {
    if (!popupContent) {
      setPopupContent(service);
    }
  };

  const handleMouseOut = () => {
    setPopupContent(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#CBD0CE] to-[#ffffff] text-black font-roboto min-h-screen">
      <link rel="icon" type="image/x-icon" href="./static/img/favicon.ico" />
      <header className="flex flex-row justify-between items-center p-6">
        <div className="flex items-center">
          <img
            src="./static/img/logo.png"
            alt="会社ロゴ"
            className="w-[50px] h-[50px] mr-2"
          />
          <div className="hidden md:block text-3xl font-bold text-black">
            株式会社ぐらで
          </div>
        </div>
        <nav>
          <ul className="flex flex-row space-x-6 text-lg text-black">
            <li>
              <a href="#policy" className="hover:text-gray-500">
                Policy
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-gray-500">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/18vo0WavCkFQX97cLfYpXxCMl7LF__WKE?usp=drive_link"
                className="hover:text-gray-500"
              >
                IR
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="text-center mt-10">
        <div
          className="relative w-full h-[400px] -mt-8"
          style={{
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url("./static/img/back.png")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#ffffff]" />
          <div className="relative z-10 flex justify-center items-center w-full h-full bg-black bg-opacity-10">
            <h1 className="text-6xl font-bold text-white">
              <span className="block md:inline">Gradation</span>{" "}
              <span className="block md:inline">with</span>{" "}
              <span className="block md:inline">Gradient</span>
            </h1>
          </div>
        </div>
        <section className="mt-20 max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black" id="policy">
            理念
          </h2>
          <div className="flex flex-col gap-8">
            <div
              className="bg-fixed p-4 text-black animate-fadeIn delay-200"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url("./static/img/back.png")`,
              }}
            >
              <div className="bg-white bg-opacity-50 p-4 rounded text-black animate-fadeIn delay-200">
                <h3
                  id="philosophy"
                  className="text-3xl font-bold mb-4 text-center"
                >
                  Mission
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
                  <div className="flex-1 p-2 md:max-w-[45%] w-full">
                    <h4 className="text-xl font-bold mb-1">Gradation</h4>
                    <p>
                      二元論やステレオタイプによる対立・分断から脱却しグラデーションの中で自分らしく生きることを認め合う「なめらなかな社会」を実現する
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-black text-center md:mx-4">
                    &
                  </div>
                  <div className="flex-1 p-2 md:max-w-[45%] w-full">
                    <h4 className="text-xl font-bold mb-1">Gradient</h4>
                    <p>
                      人類の本能的・構造的な対立をテクノロジーによって解放する。Gradient(勾配,
                      関数の傾き)をコアとするAI技術がその課題解決を加速させる。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-fixed p-4 text-black animate-fadeIn delay-200"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url("./static/img/back.png")`,
              }}
            >
              <div className="bg-white bg-opacity-50 p-4 rounded text-black">
                <h3 className="text-3xl font-bold mt-4 text-center">Vision</h3>
                <p>
                  ビジネスとテクノロジーを有機的に接続し、真に人類の課題解決をなすプロダクトを送り届ける
                </p>
              </div>
            </div>
            <div
              className="bg-fixed p-4 text-black animate-fadeIn delay-400"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url("./static/img/back.png")`,
              }}
            >
              <div className="bg-white bg-opacity-50 p-4 rounded text-black">
                <h3 className="text-3xl font-bold mt-4 text-center">Values</h3>
                <div className="flex flex-col md:flex-row justify-center items-start md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex-1 p-4">
                    <h4 className="text-xl font-bold mb-2">イシュードリブン</h4>
                    <p>
                      手段に過ぎないテクノロジーを目的にしない。真の課題は何かを見定め、その解決策として「自然」なテクノロジーを提供する。
                    </p>
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-xl font-bold mb-2">長期的思考</h4>
                    <p>
                      短期的な価値貢献や収益だけに注力しない。お客様に長期的に価値をもたらし、我々も長期的に成長する。
                    </p>
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-xl font-bold mb-2">全体最適</h4>
                    <p>
                      近視眼的で個人最適な弊社のみの利益を目指さない。あらゆるステークホルダーを考慮し、社会全体に与える影響を最優先する。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-black" id="service">
            主要サービス
          </h2>
          <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {services.map((service, index) => (
              <li
                key={index}
                className="relative p-8 border border-[#b0b6b3] bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-sm text-black animated-slideIn"
                onClick={() => handleClick(service)}
              >
                <div className="flex items-center justify-center">
                {isClient && (
                  <Script
                    src="https://use.fontawesome.com/releases/v6.6.0/js/all.js"
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                  />
                )}
                  <i
                    className={`fas ${
                      index === 0
                        ? "fa-chart-line"
                        : index === 1
                        ? "fa-brain"
                        : index === 2
                        ? "fa-robot"
                        : index === 3
                        ? "fa-project-diagram"
                        : index === 4
                        ? "fa-bullhorn"
                        : "fa-chart-pie"
                    } text-4xl text-[#333333] mb-4`}
                  ></i>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-20 max-w-[900px] mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black" id="about">
            会社概要
          </h2>
          <div className="bg-white bg-opacity-50 p-4 rounded text-black">
            <dl className="text-left">
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">会社名</dt>
                <dd className="md:w-2/3 w-full">
                  株式会社ぐらで (Gurade Inc.)
                </dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">代表者氏名</dt>
                <dd className="md:w-2/3 w-full">
                  松井 諒生　(
                  <a
                    target="_blank"
                    href="https://hand10ryo.github.io/ryo_matsui.github.io/"
                    className="md:w-2/3 w-full hover:text-blue-500"
                  >
                    個人HP
                  </a>
                  )
                </dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">所在地</dt>
                <dd className="md:w-2/3 w-full">150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8B</dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">
                  代表者メールアドレス
                </dt>
                <dd className="md:w-2/3 w-full">ryo_matsui@gurade-inc.com</dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">設立年月日</dt>
                <dd className="md:w-2/3 w-full">2024年10月25日</dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">事業内容</dt>
                <dd className="md:w-2/3 w-full">上述の通り</dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2 border-b border-[#b0b6b3]">
                <dt className="font-bold md:w-1/3 w-full">資本金</dt>
                <dd className="md:w-2/3 w-full">300万円</dd>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between md:p-4 p-2">
                <dt className="font-bold md:w-1/3 w-full">従業員数</dt>
                <dd className="md:w-2/3 w-full">1名</dd>
              </div>
            </dl>
          </div>
        </section>
        {popupContent && (
          <div
            className="fixed inset-0 bg-[#333333] bg-opacity-70 text-white flex justify-center items-center z-50"
            onClick={handleMouseOut}
          >
            <div
              className="flex flex-col md:flex-row w-full max-w-5xl bg-white text-black rounded-lg mx-4 p-4 relative"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "fadeIn 0.3s" }}
            >
              <button
                onClick={handleMouseOut}
                className="absolute top-2 right-2 text-black text-xl font-bold"
              >
                &times;
              </button>
              <div className="w-full flex justify-center md:w-[40%]">
                <img
                  src={popupContent.image}
                  alt={`${popupContent.title}のイメージ`}
                  className="w-[90%] h-auto max-w-[80%] rounded-lg"
                />
              </div>
              <div className="md:w-[60%] p-6 pt-2 flex flex-col text-left space-y-2">
                <div className="flex items-center space-x-2">
                  <i
                    className={`fas ${
                      services.findIndex(
                        (s) => s.title === popupContent.title
                      ) === 0
                        ? "fa-chart-line"
                        : services.findIndex(
                            (s) => s.title === popupContent.title
                          ) === 1
                        ? "fa-brain"
                        : services.findIndex(
                            (s) => s.title === popupContent.title
                          ) === 2
                        ? "fa-robot"
                        : services.findIndex(
                            (s) => s.title === popupContent.title
                          ) === 3
                        ? "fa-project-diagram"
                        : services.findIndex(
                            (s) => s.title === popupContent.title
                          ) === 4
                        ? "fa-bullhorn"
                        : "fa-chart-pie"
                    } text-3xl text-[#333333]`}
                  ></i>
                  <h3 className="text-2xl font-bold">{popupContent.title}</h3>
                </div>
                <div className="pt-2">
                  <table className="table-fixed w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold w-1/4">概要</td>
                        <td className="p-2">{popupContent.description}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold w-1/4">強み</td>
                        <td className="p-2">{popupContent.addedValue}</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold w-1/4">実績</td>
                        <td className="p-2">{popupContent.achievements}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mb-20" /> {/* スペース追加 */}
      </main>
      <footer className="bg-black text-white py-6">
        <div className="text-center">
          <p>株式会社ぐらで</p>
          <p>〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8B</p>
          <p></p>
          <p>代表メール: ryo_matsui@gurade-inc.com</p>
          <p>&copy; 2024 株式会社ぐらで</p>
        </div>
      </footer>
      <style jsx global>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            from {
              transform: translateX(-50%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default MainComponent;
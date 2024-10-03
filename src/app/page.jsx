"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <header className="bg-gray-800 text-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">株式会社データウィズダム</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  サービス
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  事例
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            データの力で、ビジネスを変革
          </h2>
          <p className="text-lg text-gray-600">
            最先端のデータサイエンス技術を活用し、お客様のビジネス課題を解決します。
          </p>
        </section>

        <section className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            ビジョン・ミッション・バリュー
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2 text-gray-700">ビジョン</h4>
              <p className="text-gray-600">
                データ駆動型社会の実現を通じて、持続可能な未来を創造する
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-gray-700">
                ミッション
              </h4>
              <p className="text-gray-600">
                革新的なデータ分析ソリューションを提供し、企業の意思決定を強化する
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-gray-700">バリュー</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>革新性</li>
                <li>信頼性</li>
                <li>協調性</li>
                <li>倫理性</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">サービス</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <i className="fas fa-chart-line text-3xl text-gray-600 mb-4"></i>
              <h4 className="text-xl font-bold mb-2 text-gray-700">
                データ分析
              </h4>
              <p className="text-gray-600">
                ビッグデータを活用した高度な分析サービスを提供します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <i className="fas fa-robot text-3xl text-gray-600 mb-4"></i>
              <h4 className="text-xl font-bold mb-2 text-gray-700">機械学習</h4>
              <p className="text-gray-600">
                AI技術を用いた予測モデルの構築と実装をサポートします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <i className="fas fa-clipboard-list text-3xl text-gray-600 mb-4"></i>
              <h4 className="text-xl font-bold mb-2 text-gray-700">
                コンサルティング
              </h4>
              <p className="text-gray-600">
                データ戦略の立案からシステム導入までトータルにサポートします。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            お問い合わせ
          </h3>
          <p className="mb-4 text-gray-600">
            プロジェクトについてのご相談は、以下のフォームからお気軽にお問い合わせください。
          </p>
          <form className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              送信
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 株式会社データウィズダム. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="/electronic-public-notice"
              className="text-gray-300 hover:text-white"
            >
              電子公告はこちら
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import { getAllCategories, getAllTrending } from "./utils";
import ListCategory from "./components/ListCategory";
import ListTrending from "./components/ListTrending";
import Footer from "./components/Footer";
import NavbarBottom from "./components/Navbar/NavbarBottom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: getAllCategories(),
      trending: getAllTrending(),
      amountTrending: 8,
      showButton: true,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.state.amountTrending === 12
      ? this.setState(() => {
          return {
            amountTrending: this.state.amountTrending + 4,
            showButton: false,
          };
        })
      : this.setState(() => {
          return {
            amountTrending: this.state.amountTrending + 4,
          };
        });
  }

  render() {
    const trending = this.state.trending.slice(0, this.state.amountTrending);
    const categories = this.state.categories.slice(0, 4);
    return (
      <>
        <div className="bg-[url('../assets/background-hero.png')] bg-cover">
          <div className="bg-white/95 backdrop-blur-sm">
            <Navbar />
            <Hero />
          </div>
        </div>

        <div className="container px-5 sm:mx-auto">
          <div className="grid gap-y-2">
            <h1 className="text-2xl sm:text-4xl font-medium">
              Browser Our Category
            </h1>
            <h2 className="text-primary text-xl sm:text-3xl font-medium">
              Receipt
            </h2>
          </div>
          <ListCategory categories={this.state.categories} />
        </div>

        <div className="container px-5 sm:mx-auto sm:my-20">
          <div className="grid gap-y-2">
            <h1 className="text-2xl sm:text-4xl font-medium">
              Browser Our Trending
            </h1>
            <h2 className="text-primary text-xl sm:text-3xl font-medium">
              Receipt
            </h2>
            <ListTrending trending={trending} />
          </div>

          <div className="invisible sm:flex sm:justify-center sm:mt-16 sm:visible">
            {this.state.showButton && (
              <button
                id="btn-allreceipt"
                className="bg-primary px-14 py-4 text-white font-medium text-base rounded-full"
                onClick={this.onLoadMore}>
                All Receipt
              </button>
            )}
          </div>
        </div>

        <div className="invisible sm:container sm:mx-auto sm:mt-52 sm:visible">
          <Footer categories={categories} />
          <div className="sm:mt-12 sm:mb-8 ">
            <p className="text-center text-sm font-normal uppercase text-light1">
              © 2021 Elemes id. All rights reserved
            </p>
          </div>
        </div>

        <NavbarBottom />
      </>
    );
  }
}

export default App;

import CardTrending from "./Card/CardTrending";
import PropTypes from "prop-types";

function ListTrending({ trending }) {
  return trending.length === 0 ? (
    <p>Tidak ada Trending</p>
  ) : (
    <div className="grid gap-y-5 mt-16 sm:grid-cols-4 sm:grid-flow-row sm:gap-x-5">
      {trending.map((trends) => {
        if (trends.category === "Pizza") {
          return (
            <CardTrending key={trends.id} color="bg-blue2/90" {...trends} />
          );
        }
        if (trends.category === "Pizza") {
          return (
            <CardTrending key={trends.id} color="bg-blue2/90" {...trends} />
          );
        }
        if (trends.category === "Kebab") {
          return (
            <CardTrending key={trends.id} color="bg-purple2/90" {...trends} />
          );
        }
        if (trends.category === "Salmon") {
          return (
            <CardTrending key={trends.id} color="bg-red2/90" {...trends} />
          );
        }
        if (trends.category === "Cupcake") {
          return (
            <CardTrending key={trends.id} color="bg-green2/90" {...trends} />
          );
        }
        if (trends.category === "Doughnut") {
          return (
            <CardTrending key={trends.id} color="bg-lime2/90" {...trends} />
          );
        }
      })}
    </div>
  );
}

ListTrending.propTypes = {
  trending: PropTypes.array.isRequired,
};

export default ListTrending;

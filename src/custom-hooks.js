import { useState, useEffect } from "react";

// SLUG
export const getSlugName = (string) => {
  const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
  const to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
  const regex = new RegExp(from.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(regex, (character) => to.charAt(from.indexOf(character)))
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const backgroundAverageElement = (average) => {
  if (average > 5) {
    return "#28df99";
  } else if (average > 3) {
    return "#f0a500";
  } else {
    return "#f05454";
  }
};

// INFINITE SCROLL

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const isPageBottomReached = scrollTop + clientHeight >= scrollHeight - 150;

    if (!isPageBottomReached) return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching];
};

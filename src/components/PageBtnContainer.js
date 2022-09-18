import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/css_structures/PageBtnContainer";

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_1, index) => {
    return index + 1; // Since the index starts from 0, I added 1 to make it count from 1.
  });

  const nextPage = () => {
    console.log("next page");
  };
  const prevPage = () => {
    console.log("prev page");
  };
  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              onClick={() => console.log("change page")}
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;

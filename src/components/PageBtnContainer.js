import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/css_structures/PageBtnContainer";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { page, numOfPages, pageNumber } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_1, index) => {
    return index + 1; // Since the index starts from 0, I added 1 to make it count from 1.
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
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
              onClick={() => dispatch(changePage(pageNumber))}
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

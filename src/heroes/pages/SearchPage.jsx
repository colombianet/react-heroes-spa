import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onHandleSubmit}>
            <input
              onChange={onInputChange}
              value={searchText}
              name="searchText"
              autoComplete="off"
              type="text"
              className="form-control"
              placeholder="Buscar heroe"
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            q == '' ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
              : heroes.length == 0 && <div className="alert alert-danger animate__animated animate__fadeIn">There's no results with {q}</div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />

            ))
          }
        </div>
      </div>
    </>
  );
};

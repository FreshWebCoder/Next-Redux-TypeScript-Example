import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";

import { fetchPeoples } from "../../store/actions/peoples";
import { getIsLoading, getPeoples } from "../../store/selectors/peoples";

const People: NextPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const peoples = useSelector(getPeoples);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const filteredPeoples = peoples.filter((el) => {
    if (!el.name.toLowerCase().includes(name.toLowerCase())) return false;
    if (gender && el.gender !== gender) return false;

    return true;
  });

  useEffect(() => {
    dispatch(fetchPeoples());
  }, [dispatch]);

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onGenderChange = (e) => {
    setGender(e.target.value);
  }

  const onReset = () => {
    setName("");
    setGender("");
  }

  return (
    <div className="container">
      <form className="search-form">
        <div className="row">
          <label>Name: </label>

          <input
            type="text"
            className="search-input"
            value={name}
            onChange={onNameChange}
          />
        </div>

        <div className="row">
          <label>Gender: </label>

          <div className="radio-group">
            <div className="radio-box">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={onGenderChange}
              />
              <span>Male</span>
            </div>
            <div className="radio-box">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={onGenderChange}
              />
              <span>Female</span>
            </div>
          </div>
        </div>

        <button type="button" onClick={onReset}>Clear</button>
      </form>

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {filteredPeoples.map((el, idx) => 
            <li key={idx}>
              {`${el.name} (height: ${el.height} / gender: ${el.gender})`}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default People;

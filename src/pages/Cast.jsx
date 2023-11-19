import { styled } from "styled-components";
import { castImageFallback, customImage, fetchPersonDetails } from "api/Api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Cast() {
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);
  const { personId } = useParams();

  useEffect(() => {
    setLoading(true);
    getPersonDetails(personId);
    setLoading(false);
  }, [personId]);
  const getPersonDetails = async (personId) => {
    const data = await fetchPersonDetails(personId);
    setPerson(data);
    console.log(data);
  };
  return loading ? (
    "Loading..."
  ) : (
    <CastContainer>
      <div className="container">
        <div className="left">
          <img
            src={
              (person?.profile_path &&
                customImage(person?.profile_path, "w500")) ||
              castImageFallback
            }
            alt={person?.name}
          />
          <b className="title">Personal Information</b>
          <b>Place of birth</b>
          <span>{person?.place_of_birth || "Not available"}</span>
          <b>Birthday</b>
          <span>{person?.birthday || "Not available"}</span>
          <b>Known Credits</b>
          <span>
            {Number(person?.popularity).toFixed(0) || "Not available"}
          </span>
          <b>Official Homepage</b>
          <span>
            {(person?.homepage && (
              <Link to={person?.homepage} target="_blank">
                Link
              </Link>
            )) ||
              "Not available"}
          </span>
          <b>Social Media</b>
          <span>{person?.social || "Not available"}</span>
        </div>
        <div className="right">
          <h1>{person?.name || "Not available"}</h1>
          <div
            style={{
              marginBottom: `${person?.known_for_department && "20px"}  `,
            }}
          >
            {person?.known_for_department || ""}
          </div>
          <b className="title">Biography</b>
          <p>{person?.biography || "Not available"}</p>
        </div>
      </div>
    </CastContainer>
  );
}

const CastContainer = styled.div`
  .container {
    display: flex;
    gap: 25px;
    padding: 20px 40px;
    .left {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 260px;
      .title {
        font-size: 24px;
      }
      img {
        border-radius: 10px;
        border: 2px solid white;
        max-height: 400px;
        max-width: 260px;
        width: 260px;
        height: 380px;
        object-fit: cover;
        margin-bottom: 20px;
      }
      span {
        font-size: 16px;
        color: var(--textSecondary);
      }
      b {
        font-size: 18px;
      }
    }
    .right {
      width: 100%;
      h1 {
        font-size: 38px;
      }
      .title {
        font-size: 24px;
      }
    }
  }
`;

export default Cast;

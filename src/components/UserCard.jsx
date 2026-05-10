import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, bio, photoUrl, skills } = user;
  // console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl my-10">
      <figure className="">
        <img src={photoUrl} alt="User photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>

        <p>{[age, gender].filter(Boolean).join(" ")}</p>
        <ul className="list-none text-xs text-left">
          {user.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p>{bio}</p>
        <div className="card-actions justify-end my-4">
          <button className="btn btn-primary mr-3">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

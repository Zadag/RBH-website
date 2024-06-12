import React from "react";
import RBHImage from "../assets/RBH-Logo.png";
import TopImg from "../assets/7990-lol-role-top.png";
import MidImg from "../assets/6934-lol-role-mid.png";
import FillImg from "../assets/2724-lol-role-fill.png";
import BotImg from "../assets/9366-lol-role-bot.png";
import SuppImg from "../assets/7990-lol-role-support.png";
import JGImg from "../assets/1152-lol-role-jungle.png";
import goldImg from "../assets/gold.png";
import platinumImg from "../assets/platinum.png";
import diamondImg from "../assets/diamond.png";
import masterImg from "../assets/master.png";
import grandmasterImg from "../assets/grandmaster.png";
import challengerImg from "../assets/challenger.png";
import { globalState } from "../stores/globalStore";

const PlayerCard = ({
  player,
  role,
  rank,
  champs,
  wins,
  losses,
  team,
  elo,
  opgg,
}) => {
  let champ1, champ2, champ3;

  if (champs.includes(",")) {
    [champ1, champ2, champ3] = champs.split(", ");
  }

  let roleImg;

  if (role === "Top") roleImg = TopImg;
  if (role === "Jungle") roleImg = JGImg;
  if (role === "Mid") roleImg = MidImg;
  if (role === "Support") roleImg = SuppImg;
  if (role === "Bot" || role === "ADC") roleImg = BotImg;
  if (role === "Fill") roleImg = FillImg;

  let rankImg;

  if (rank.includes("Gold")) rankImg = goldImg;
  if (rank.includes("Platinum")) rankImg = platinumImg;
  if (rank.includes("Emerald")) rankImg = platinumImg;
  if (rank.includes("Diamond")) rankImg = diamondImg;
  if (rank.includes("Master")) rankImg = masterImg;
  if (rank.includes("Grandmaster")) rankImg = grandmasterImg;
  if (rank.includes("Challenger")) rankImg = challengerImg;

  return (
    <li className="link-card">
      <select id={`dropdown-${player}`} data-player={player}>
        <option value="all">Select Captain</option>
        <option value="Sasha">Sasha</option>
        <option value="LostZero">LostZero</option>
        <option value="ChillSavior">ChillSavior</option>
        <option value="HumanFaith">HumanFaith</option>
        <option value="Frischy">Frischy</option>
        <option value="SComm">SComm</option>
      </select>
      <h2>{player}</h2>
      <h3>
        {wins} - {losses} | {elo} Elo
      </h3>
      <div className="champs">
        <img
          className="champ-img"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ1}_0.jpg`}
          alt={champ1}
        />
        <img
          className="champ-img"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ2}_0.jpg`}
          alt={champ2}
        />
        <img
          className="champ-img"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ3}_0.jpg`}
          alt={champ3}
        />
        <div className="role-rank">
          <img className="role" src={roleImg} alt={role} />
          <img className="rank-img" src={rankImg} alt={rank} />
        </div>
      </div>
      {/* <a href={opgg} target="_blank" rel="noopener noreferrer">
        OPGG
      </a> */}
    </li>
  );
};

export default PlayerCard;

import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { Container } from "../styles/components/CharCard";

const CharCard = ({ charId, hero, identity, power_level }) => {
  const { getChar } = useContext(AuthContext);

  const handleCharId = () => {
    getChar(charId);
  };

  return (
    <Container onClick={handleCharId}>
      <p>Herói: {hero}</p>
      <p>Identidade: {identity}</p>
      <p>Nível de poder: {power_level}</p>
    </Container>
  );
};

export default CharCard;

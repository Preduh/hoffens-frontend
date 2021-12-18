import { Container } from "../styles/components/CharCard";

const CharCard = ({ hero, identity, power_level }) => {
  return (
    <Container>
      <p>Herói: {hero}</p>
      <p>Identidade: {identity}</p>
      <p>Nível de poder: {power_level}</p>
    </Container>
  );
};

export default CharCard;

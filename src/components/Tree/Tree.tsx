import { IPokemon, IPokemonEvolution } from "../../interfaces/IPokemon";
import { ITree } from "../../interfaces/ITree";
import Link from "../Link/Link";
import MiniCard from "../MiniCard/MiniCard";
import { TreeContainer, TreeItem, TreeList } from "./styles";

function treeManager(id: string, father: IPokemon, sons: IPokemonEvolution[]) {
  return (
    <TreeItem key={id}>
      <Link href={`/pokemon/${father.id}`}>
        <MiniCard id={father.id} name={father.name} image={father.image} />
      </Link>
      {sons.length > 0 && (
        <TreeList>
          {sons.map((son) =>
            treeManager(son.pokemonInfo.id, son.pokemonInfo, son.sons),
          )}
        </TreeList>
      )}
    </TreeItem>
  );
}

const Tree = ({ father, sons }: ITree) => {
  return (
    <TreeContainer>
      <TreeList>
        <TreeItem>
          <Link href={`/pokemon/${father.id}`}>
            <MiniCard id={father.id} name={father.name} image={father.image} />
          </Link>
          {sons.length > 0 && (
            <TreeList key={father.id}>
              {sons.map((son) =>
                treeManager(son.pokemonInfo.id, son.pokemonInfo, son.sons),
              )}
            </TreeList>
          )}
        </TreeItem>
      </TreeList>
    </TreeContainer>
  );
};

export default Tree;

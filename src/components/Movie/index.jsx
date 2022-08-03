import { Container } from './styles';
import { Tag } from "../Tag";
import { Stars } from "../Stars";

export function Movie({data, ...rest}) {

  return(
    <Container {...rest} >
      <h1>{data.title}</h1>
      <Stars size={12} score={data.score}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis incidunt officiis mollitia at fugit omnis earum eius a veritatis, voluptate est commodi esse error temporibus nulla eaque! Explicabo, minus repellat.
      </p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag=> <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>

  )

}
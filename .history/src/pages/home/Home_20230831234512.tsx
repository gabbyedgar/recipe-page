import { Footer, Navbar } from "../../components";
import { egusi } from "../../assets/images";
export const Home = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <div className="flex flex-row divide-x-2 w-[80%] mx-auto max-sm:flex-col items-center	 py-10">
        <div className="basis-1/2  text-primary">
          <h2>AUTUMN SQUASH SOUP</h2>
          <p className="text-sm pb-4">
            SERVES: 6 | PREP TIME: 20 MINUTES | COOK TIME: 60 MINUTES
          </p>
          <hr />
          <h3 className="py-2">INGREDIENTS</h3>
          <div className="flex flex-row max-sm:flex-col max-sm:text-sm text-xs gap-2 justify-between pr-5 pb-4">
            <div>
              <p>3 tbsp extra-virgin olive oil</p>
              <p>1 (2 lb)the butter nut squash cut into 1" cubes</p>
              <p>2 medium carrois. peeled and chopped</p>
              <p>2 large shallots, chopped</p>
              <p>kosher salt</p>
              <p>freshly ground black pepper</p>
              <p>2 cloves garlic. minced</p>
              <p>1 tbsp ground ginger</p>
              <p>1 tsp curry powder</p>
              <p>4 cups vegetable broth</p>
            </div>
            <div>
              <p>1 cup apple juice</p>
              <p>1 cup water</p>
              <p>1/2 cup pumpkin puree</p>
              <p>2 tbsp cream cheese, softened</p>
              <p>heavy cream (optional)</p>
              <p>1/2 cup pepitas</p>
              <p>1 tsp chili powder</p>
              <p>1 tbsp brown sugar</p>
            </div>
          </div>

          <hr />
          <h3 className="py-2">INSTRUCTIONS</h3>
          <div className="flex flex-col gap-4 text-sm">
          <p>For the soup</p>
          <p>
            In a large pot over medium heat, heat oil, Add squash, carrots, and
            shallots and season with salt and pepper. Cook stirring
            occasionally, until beginning to soften, about 5 minutes. Stir in
            geric, suger one curry powder end cook un vegeedles are ocainming to
            ceremenze obout 2 minutes more.
          </p>
          <p>
            Pour over broth apple juice and water. Bring to a boil, then reduce
            to a simmer and cook until vegeicoles are soft goout o minutes.
            Meanwhie. in a smalloow. whisk togetner oumokin ovree one cream
            cheese unt incoroorereo.
          </p>
          <p>
            Pour pumpkin mixture into a pot and stir to combine, Using an
            immersion blender puree soup until smooth. season with salt and
            pepper and stir in desired amount of heavy cream. it using. serve
            soup 100000 win ooditos.
          </p>
          <p>For the topping</p>
          <p>
            Preheat oven to 350 degrees. On a medium baking sheet, toss pepitas
            with oil and chili powder and season with salt. Bake, shaking the
            pan haltway through until pepitas are crunchy and golcen, goou to
            minutes. cel cool completely.
          </p>
          </div>
        </div>
        <div className="basis-1/2 h-[100%] ">
          <img
            src={`${egusi}`}
            alt=""
            className="w-[85%] m-auto border-y-2 py-4 "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

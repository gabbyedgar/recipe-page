import { Footer, Navbar } from "../../components";
import { egusi } from "../../assets/images";
export const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-row divide-x-2 w-[80%] mx-auto max-sm:flex-col items-center	 py-10">
        <div className="basis-1/2">
          <h1 className="text-yellow-500">JOLLOF RICE</h1>
          <p className="text-yellow-500 text-sm pb-4" text-border-b-4>
            COOK TIME: 60 MINUTES
          </p>
          <hr />
          <h3 className="py-2">INGREDIENTS</h3>
          <div className="flex flex-row max-sm:flex-col max-sm:text-sm text-xs gap-2 justify-between pr-5 pb-4" >
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
          1. Rinse the rice thoroughly in cold water until the water runs clear. Soak the rice in water for about 15-20 minutes, then drain.

2. In a large pot or skillet, heat the vegetable oil over medium heat. Add the chopped onions and sauté until they become translucent.

3. Add the minced garlic, chopped bell pepper, and other desired vegetables (if using). Sauté for a few minutes until the vegetables start to soften.

4. Stir in the ground ginger, cayenne pepper or paprika, thyme, curry powder, dried thyme, and ground nutmeg. Cook for a minute or two to toast the spices and release their flavors.

5. Add the tomato sauce or blended fresh tomatoes to the pot. Cook the mixture for about 5-7 minutes, stirring occasionally, until the tomato sauce has thickened and the oil starts to separate from the tomato mixture.

6. Pour in the chicken or vegetable broth and bring the mixture to a gentle boil.

7. Add the drained rice to the pot, stirring to combine it with the tomato and spice mixture. If using cooked meat or seafood, add it at this point.

8. Reduce the heat to low, cover the pot with a tight-fitting lid, and let the rice simmer. Allow it to cook for about 20-25 minutes, or until the rice is tender and has absorbed the liquid. If the rice isn't cooked and the liquid has been absorbed, you can add a little more broth or water and continue cooking.

9. Once the rice is cooked, fluff it with a fork to separate the grains. Taste and adjust the seasoning with salt and pepper as needed.

10. Allow the jollof rice to rest for a few minutes before serving. This allows the flavors to meld and the rice to firm up slightly.

11. Serve the jollof rice as a main dish or as a side dish alongside grilled meats, fish, or other favorite West African accompaniments.

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

import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("add movie", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      1009,
      "Мстители",
      100,
      2012,
      "США",
      "Avengers Assemble!",
      "fantasy",
      137
    )
  );
  expect(cart.items).toEqual([
    {
      country: "США",
      id: 1009,
      name: "Мстители",
      price: 100,
      slogan: "Avengers Assemble!",
      style: "fantasy",
      time: 137,
      yearIssue: 2012,
    },
  ]);
});

test("total summa", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1009,
      "Мстители",
      100,
      2012,
      "США",
      "Avengers Assemble!",
      "fantasy",
      137
    )
  );
  expect(cart.totalSum()).toBe(3000);
});

test("total summa with discount", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1009,
      "Мстители",
      100,
      2012,
      "США",
      "Avengers Assemble!",
      "fantasy",
      137
    )
  );
  expect(cart.totalSumWithDiscount(10)).toBe(2700);
});
test("delete good by id", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1009,
      "Мстители",
      100,
      2012,
      "США",
      "Avengers Assemble!",
      "fantasy",
      137
    )
  );
  cart.deleteGoodById(1001);
  expect(
    cart.items.includes({
      id: 1001,
      name: "War and Piece",
      pages: 1225,
      price: 2000,
      author: "Leo Tolstoy",
    })
  ).toBeFalsy();
});

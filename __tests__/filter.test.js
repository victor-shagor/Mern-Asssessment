import request from "supertest";
import app from "../app";
import { connect, disconnect } from "../testConnectionScripts";

beforeAll(connect);
afterAll(disconnect);
describe("Filter", () => {
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 1,
        start_year: 1991,
        end_year: 2009,
        gender: "male",
        countries: [
          "Brazil",
          "Ireland",
          "Egypt",
          "Poland",
          "Niger",
          "Greece",
          "Peru",
        ],
        colors: ["Green", "Violet", "Yellow", "Blue"],
      });
    res.body.data.length
      ? expect(res.body.data[0].gender).toBe("Male") &&
        expect(res.body.data[0]).toHaveProperty("first_name")
      : expect(res.body.data[0].gender).toBeUndefined();
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 2,
        start_year: 1990,
        end_year: 2010,
        gender: "",
        countries: [
          "Russia",
          "Portugal",
          "Vietnam",
          "Croatia",
          "Uganda",
          "Iran",
        ],
        colors: ["Teal", "Maroon", "Red"],
      });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 3,
        start_year: 2001,
        end_year: 2009,
        gender: "female",
        countries: [],
        colors: ["Red", "Aquamarine", "Orange", "Mauv"],
      });
    res.body.data.length
      ? expect(res.body.data[0].gender).toBe("Female") &&
        expect(res.body.data[0]).toHaveProperty("first_name")
      : expect(res.body.data[0].gender).toBeUndefined();
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 4,
        start_year: 1990,
        end_year: 2000,
        gender: "",
        countries: ["United States"],
        colors: [],
      });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 4,
        start_year: 1990,
        end_year: 2000,
        gender: "",
        countries: ["United States"],
        colors: [],
      });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
  it("should return all car owners", async (done) => {
    const res = await request(app)
      .get("/filter")
      .send({
        id: 5,
        start_year: 2000,
        end_year: 2009,
        gender: "",
        countries: [
          "Myanmar",
          "South Africa",
          "Nicaragua",
          "Finland",
          "Cuba",
          "Mexico",
        ],
        colors: [],
      });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(typeof res.body.data).toBe("object");
    done();
  });
});

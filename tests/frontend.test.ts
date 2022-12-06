import { getMonthName, Data } from "../functions/index";

describe("getMonthName", () => {
    const mockGetMonthName = jest.fn(getMonthName);
    const arrayOfNumbers = [ 1, 4, 9 ];

    afterEach(() => {
        mockGetMonthName.mockClear();
    });

    test("successful returns", () => {
        arrayOfNumbers.forEach(item => mockGetMonthName(item));

        expect(mockGetMonthName.mock.results.at(0)?.value).toBe("January");
        expect(mockGetMonthName.mock.results.at(1)?.value).toBe("April");
        expect(mockGetMonthName.mock.results.at(2)?.value).toBe("September");
    });

    test("throws errors", () => {
        expect(mockGetMonthName(0)).toBe("");
        expect(mockGetMonthName(-100)).toBe("");
    });
});

describe("Data", () => {
    const mockGetData = jest.fn(Data.getData);
    const mockGetDataProgress = jest.fn(Data.getDataProgress);

    afterEach(() => {
        mockGetData.mockClear();
        mockGetDataProgress.mockClear();
    });

    const returnsDatas = [
        {
            id: 12,
            value: "Hello"
        },
        {
            id: 132,
            value: "See you soon"
        }
    ];

    test("mockGetData return values", async () => {
        mockGetData.mockResolvedValueOnce(returnsDatas[0]);
        const response_1 = await mockGetData("/blog/blogs", "json");
        expect(response_1).toEqual(returnsDatas[0]);

        mockGetData.mockResolvedValueOnce(returnsDatas[1]);
        const response_2 = await mockGetData("/blog/posts", "json");
        expect(response_2).toEqual(returnsDatas[1]);
    });

    test("mockGetDataProgress return values", async () => {
        const dataGenerator = mockGetDataProgress("/home/postData");
        const { value, done } = await dataGenerator.next();
        
        expect(value).not.toBeUndefined();
        expect(done).toBeTruthy();
    });
});
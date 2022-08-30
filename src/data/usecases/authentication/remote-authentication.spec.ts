import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct Url', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()// system under test
    expect(httpPostClientSpy.url).toBe(url)
  })
})
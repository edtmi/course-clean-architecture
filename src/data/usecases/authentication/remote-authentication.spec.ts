import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
import faker from 'faker';

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return {
      sut,
      httpPostClientSpy,
    }
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct Url', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()// system under test
    expect(httpPostClientSpy.url).toBe(url)
  })
})
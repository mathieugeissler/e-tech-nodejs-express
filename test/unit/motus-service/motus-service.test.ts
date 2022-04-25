import { Container } from 'typescript-ioc';
import { MotusService } from '@service/motus-service';
import { expect } from 'chai';

const motusService = Container.get(MotusService);

describe('MotusServiceTest', () => {
  it('should init motus service', () => {
    expect(motusService).not.be.undefined;
  });

  it('should return full word when all letter are found', async () => {
    const result = await motusService.validateWord('helloworld');
    expect(result).equal('helloworld');
  });

  it('should return first letter of word when not letter are found and underscore for other letter', async () => {
    const result = await motusService.validateWord('abcd');
    expect(result).equal('h_________');
  });

  it('should return all letter found', async () => {
    const result = await motusService.validateWord('helfclkwld');
    expect(result).equal('hel_____ld');
  });
});

import { Container } from 'typescript-ioc';
import { MotusService } from '@service/motus-service';
import { expect } from 'chai';

const motusService = Container.get(MotusService);

describe('MotusServiceTest', () => {
  it('should init motus service', () => {
    expect(motusService).not.be.undefined;
  });
});

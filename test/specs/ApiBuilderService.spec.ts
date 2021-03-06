import { ApiBuilderService } from '../../src';
import apidocApiJson from '../fixtures/apidoc-api.json';

const service = new ApiBuilderService(apidocApiJson);

describe('ApiBuilderService', () => {
  test('should have property with name', () => {
    expect(service).toHaveProperty('name', apidocApiJson.name);
  });

  test('should have property with organization key', () => {
    expect(service).toHaveProperty('organizationKey', apidocApiJson.organization.key);
  });

  test('should have property with namespace', () => {
    expect(service).toHaveProperty('namespace', apidocApiJson.namespace);
  });

  test('should have property with version', () => {
    expect(service).toHaveProperty('version', apidocApiJson.version);
  });
});

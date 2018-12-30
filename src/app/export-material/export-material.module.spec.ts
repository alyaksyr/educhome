import { ExportMaterialModule } from './export-material.module';

describe('ExportMaterialModule', () => {
  let exportMaterialModule: ExportMaterialModule;

  beforeEach(() => {
    exportMaterialModule = new ExportMaterialModule();
  });

  it('should create an instance', () => {
    expect(exportMaterialModule).toBeTruthy();
  });
});

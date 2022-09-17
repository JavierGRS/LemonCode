import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';

describe('./pods/proyect.mapper', () => {
  it('should return empty employ Summary when feeding null value', () => {
    // Arrange
    const project: apiModel.Project = null;
    // Act
    const result = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty employee when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result but feeding undefined project list', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test@email.com',
      comments: 'test',
      employees: undefined,
      isActive: true,
    };

    const projectResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test@email.com',
      comments: 'test',
      employees: [],
      isActive: true,
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(projectResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test@email.com',
      comments: 'test',
      employees: [
        {
          id: 'test@email.com',
          employeeName: 'test name',
          isAssigned: true,
        },
      ],
      isActive: true,
    };

    const projectResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test@email.com',
      comments: 'test',
      employees: [
        {
          id: 'test@email.com',
          employeeName: 'test name',
          isAssigned: true,
        },
      ],
      isActive: true,
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(projectResult);
  });
});

import { act, renderHook, waitFor } from '@testing-library/react';
import { createEmptyLookup, Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/components/useConfirmationDialog', () => {
  it('should return isOpen, itemToDelete, onAccept(), onClose(), onOpenDialog()', () => {
    // Arrange
    const emptylookup: Lookup = createEmptyLookup();
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(emptylookup);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should return isOpen and itemToDelete when onOpenDialog() is called', async () => {
    // Arrange
    const lookupTest: Lookup = {
      id: '1',
      name: 'test',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(lookupTest);
    });

    // Assert
    await waitFor(() => {
      expect(result.current.isOpen).toEqual(true);
      expect(result.current.itemToDelete).toEqual(lookupTest);
    });
  });

  it('should return emptyLookup and !isOpen when onAccept() and onClose() are called', async () => {
    // Arrange
    const lookupTest: Lookup = {
      id: '1',
      name: 'test',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(lookupTest);
      result.current.onAccept();
      result.current.onClose();
    });

    // Assert
    await waitFor(() => {
      expect(result.current.itemToDelete).toEqual(createEmptyLookup());
      expect(result.current.isOpen).toEqual(false);
    });
  });
});

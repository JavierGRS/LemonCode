import { getByRole, queryByRole, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

//isOpen is false
//

describe('common/DashboardComponent', () => {
  it('should not be render when prop isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      title: 'Title test',
      onAccept: undefined,
      onClose: undefined,
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: undefined,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    screen.debug();

    const dialogElement = screen.queryByRole('dialog');
    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('should be render as expected passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'Title test',
      onAccept: undefined,
      onClose: undefined,
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: (
        <article>
          <p>Content</p>
        </article>
      ),
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const [closeButton, acceptButton] = screen.getAllByRole('button');
    const dialogElement = screen.getByRole('dialog');
    const title = screen.getByText(props.title);
    const content = screen.getByRole('article');

    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('should call on Accept() and Close() when it clicks on "Accept" and "Close" buttons', async () => {
    // Arrange
    const props = {
      isOpen: true,
      title: 'Title test',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: undefined,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    const acceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    await userEvent.click(closeButtonElement);
    await userEvent.click(acceptButtonElement);
    // // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});

export const errorsLocalization = {
  en: {
    listErrorTitle: 'Failed to load data.',
    tryAgain: 'Try again.',
    thisFieldIsRequired: 'This field is required.',
    unknownErrorHasOccurred: 'An unknown error has occurred.',
    failedToOpenUrl: 'Failed to open URL. Check that the app is installed.',
    pleaseCheckYourInternetConnection: 'Please check your Internet connection.',
    invalidEmail: 'Invalid Email',
    invalidPhoneNumber: 'Invalid phone number',
    invalidFullName: 'Invalid full name',
    invalidFromDate: (fromField: string, toField: string) =>
      `${fromField} can't be later than ${toField.toLowerCase()}`,
    invalidToDate: (fromField: string, toField: string) =>
      `${toField} can't be earlier than ${fromField.toLowerCase()}`,
    datesCantBeEqual: (fromField: string, toField: string) =>
      `${fromField} and ${toField.toLowerCase()} can't be equal`,
    mobileDataIsTurnedOff: 'Mobile Data is Turned Off',
    turnOnMobileData: 'Turn on mobile data or use Wi-Fi to access data.',
    error: 'Error',
  },
  es: {
    listErrorTitle: 'Error al cargar los datos.',
    tryAgain: 'Intenta de nuevo.',
    thisFieldIsRequired: 'Este campo es obligatorio.',
    unknownErrorHasOccurred: 'Ha ocurrido un error desconocido.',
    failedToOpenUrl:
      'Error al abrir la URL. Verifica que la aplicación esté instalada.',
    pleaseCheckYourInternetConnection:
      'Por favor, verifica tu conexión a Internet.',
    invalidEmail: 'Correo electrónico inválido',
    invalidPhoneNumber: 'Número de teléfono inválido',
    invalidFullName: 'Nombre completo inválido',
    invalidFromDate: (fromField: string, toField: string) =>
      `${fromField} no puede ser posterior a ${toField.toLowerCase()}`,
    invalidToDate: (fromField: string, toField: string) =>
      `${toField} no puede ser anterior a ${fromField.toLowerCase()}`,
    datesCantBeEqual: (fromField: string, toField: string) =>
      `${fromField} y ${toField.toLowerCase()} no pueden ser iguales`,
    mobileDataIsTurnedOff: 'Los datos móviles están desactivados',
    turnOnMobileData:
      'Activa los datos móviles o usa Wi-Fi para acceder a los datos.',
    error: 'Error',
  },
};

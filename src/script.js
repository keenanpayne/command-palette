// 
// Constants
// ---------

const root = document.documentElement;
const parentElement = document.querySelector('.commandPalette');
const header = document.querySelector('.commandPalette-header');
const input = parentElement.querySelector('.commandPalette-input');
const list = parentElement.querySelector('.commandPalette-list');
const help = parentElement.querySelector('.commandPalette-help');
const helpGuide = help.querySelector('.commandPalette-help-guide');
const notification = document.querySelector('.notification');
const a11yHiddenClass = '_a11y_hidden';
const visibleClass = '-visible';
const hiddenClass = '-hidden';
const overlayClass = '-overlay';
const commands = [
  {
    name: 'Find nodes',
    description: 'Find any node',
    group: 'Nodes',
    shortcut: [],
    notification: 'Link copied to clipboard',
    icon: `<svg class="command-icon" width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_23_1052)"> <path d="M19.026 6.52604L13.4792 0.979167C12.849 0.351146 12.0052 0 11.1198 0H3.33333C1.49219 0 0 1.49271 0 3.33333L0.000338542 23.3333C0.000338542 25.174 1.49253 26.6667 3.33367 26.6667H16.6667C18.5078 26.6667 20 25.174 20 23.3333V8.88021C20 7.99479 19.651 7.15104 19.026 6.52604ZM11.6667 1.775C11.8998 1.85635 12.118 1.97521 12.2979 2.15505L17.8448 7.70193C18.026 7.88021 18.1458 8.09896 18.224 8.33333H12.5C12.0417 8.33333 11.6667 7.95833 11.6667 7.5V1.775ZM18.3333 23.3333C18.3333 24.2521 17.5854 25 16.6667 25H3.33333C2.41458 25 1.66667 24.2521 1.66667 23.3333V3.33333C1.66667 2.41458 2.41458 1.66667 3.33333 1.66667H10V7.5C10 8.88021 11.1198 10 12.5 10H18.3333V23.3333ZM4.16667 15.8333C4.16667 18.5906 6.40937 20.8333 9.16667 20.8333C10.2448 20.8333 11.2375 20.4826 12.0552 19.9L15.2443 23.0891C15.4062 23.25 15.6198 23.3333 15.8333 23.3333C16.0469 23.3333 16.2598 23.252 16.4224 23.0892C16.7479 22.7636 16.7479 22.236 16.4224 21.911L13.2333 18.722C13.8177 17.9062 14.1667 16.9115 14.1667 15.8333C14.1667 13.076 11.924 10.8333 9.16667 10.8333C6.40937 10.8333 4.16667 13.0781 4.16667 15.8333ZM12.5 15.8333C12.5 17.6708 11.0042 19.1667 9.16667 19.1667C7.32917 19.1667 5.83333 17.6708 5.83333 15.8333C5.83333 13.9958 7.32917 12.5 9.16667 12.5C11.0042 12.5 12.5 13.9948 12.5 15.8333Z" fill="#2D2D37"/> </g> <defs> <clipPath id="clip0_23_1052"> <rect width="20" height="27" fill="white"/> </clipPath> </defs> </svg>`,
    options: [
      {
        name: 'with tag #'
      },
      {
        name: 'with any tag'
      },
      {
        name: 'with field:'
      },
      {
        name: 'with text: ""'
      },
      {
        name: 'created'
      },
      {
        name: 'for date'
      },
      {
        name: 'for relative date'
      }
    ]
  },
  {
    name: 'Create supertag',
    description: '',
    group: 'Tags',
    shortcut: [],
    notification: 'Supertag created',
    icon: `<svg class="command-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_23_1060)"> <path d="M8.00577 0.126346C8.77412 0.254403 9.29518 0.983004 9.16712 1.75135L8.73438 4.34781H12.9338L13.4416 1.28769C13.5696 0.519349 14.2982 -0.00171075 15.0666 0.126346C15.8349 0.254403 16.356 0.983004 16.2279 1.75135L15.7996 4.34781H18.3696C19.1512 4.34781 19.7826 4.97927 19.7826 5.76086C19.7826 6.54245 19.1512 7.1739 18.3696 7.1739H15.3271L14.3865 12.8261H16.9565C17.7381 12.8261 18.3696 13.4575 18.3696 14.2391C18.3696 15.0207 17.7381 15.6522 16.9565 15.6522H13.9141L13.4062 18.7123C13.2782 19.4806 12.5496 20.0017 11.7812 19.8736C11.0129 19.7456 10.4918 19.017 10.6199 18.2486L11.0526 15.6566H6.84885L6.34103 18.7167C6.21298 19.485 5.48437 20.0061 4.71603 19.878C3.94769 19.75 3.42663 19.0214 3.55469 18.253L3.98302 15.6522H1.41304C0.631454 15.6522 0 15.0207 0 14.2391C0 13.4575 0.631454 12.8261 1.41304 12.8261H4.4555L5.39606 7.1739H2.82609C2.0445 7.1739 1.41304 6.54245 1.41304 5.76086C1.41304 4.97927 2.0445 4.34781 2.82609 4.34781H5.86855L6.37636 1.28769C6.50442 0.519349 7.23302 -0.00171075 8.00136 0.126346H8.00577ZM8.26189 7.1739L7.32133 12.8261H11.5207L12.4613 7.1739H8.26189Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_23_1060"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg> `,
  },
  {
    name: 'Delete node',
    description: '',
    group: 'Nodes',
    shortcut: ['CMD', 'Shift', 'Backspace'],
    notification: 'Node deleted',
    icon: `<svg class="command-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_23_1059)"> <path d="M5.97011 1.47727L5.65217 2.10872H1.41304C0.631454 2.10872 0 2.74018 0 3.52177C0 4.30336 0.631454 4.93481 1.41304 4.93481H18.3696C19.1512 4.93481 19.7826 4.30336 19.7826 3.52177C19.7826 2.74018 19.1512 2.10872 18.3696 2.10872H14.1304L13.8125 1.47727C13.574 0.99595 13.0839 0.695679 12.5496 0.695679H7.23302C6.69871 0.695679 6.20856 0.99595 5.97011 1.47727ZM18.3696 6.34785H1.41304L2.34918 21.3173C2.41984 22.4345 3.34715 23.3044 4.46433 23.3044H15.3183C16.4355 23.3044 17.3628 22.4345 17.4334 21.3173L18.3696 6.34785Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_23_1059"> <rect width="20" height="24" fill="white"/> </clipPath> </defs> </svg>`,
  },
  {
    name: 'View as list',
    description: '',
    group: 'Views',
    shortcut: [],
    icon: `<svg class="command-icon" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_27_2183)"> <path d="M3.4375 0.336548C3.95703 0.336548 4.375 0.75647 4.375 1.27405V3.14905C4.375 3.66858 3.95703 4.08655 3.4375 4.08655H1.5625C1.04492 4.08655 0.625 3.66858 0.625 3.14905V1.27405C0.625 0.75647 1.04492 0.336548 1.5625 0.336548H3.4375ZM19.0625 1.27405C19.582 1.27405 20 1.69397 20 2.21155C20 2.73108 19.582 3.14905 19.0625 3.14905H7.1875C6.66797 3.14905 6.25 2.73108 6.25 2.21155C6.25 1.69397 6.66797 1.27405 7.1875 1.27405H19.0625ZM19.0625 7.52405C19.582 7.52405 20 7.94202 20 8.46155C20 8.98108 19.582 9.39905 19.0625 9.39905H7.1875C6.66797 9.39905 6.25 8.98108 6.25 8.46155C6.25 7.94202 6.66797 7.52405 7.1875 7.52405H19.0625ZM19.0625 13.774C19.582 13.774 20 14.192 20 14.7115C20 15.2311 19.582 15.649 19.0625 15.649H7.1875C6.66797 15.649 6.25 15.2311 6.25 14.7115C6.25 14.192 6.66797 13.774 7.1875 13.774H19.0625ZM0.625 7.52405C0.625 7.00452 1.04492 6.58655 1.5625 6.58655H3.4375C3.95703 6.58655 4.375 7.00452 4.375 7.52405V9.39905C4.375 9.91858 3.95703 10.3365 3.4375 10.3365H1.5625C1.04492 10.3365 0.625 9.91858 0.625 9.39905V7.52405ZM3.4375 12.8365C3.95703 12.8365 4.375 13.2545 4.375 13.774V15.649C4.375 16.1686 3.95703 16.5865 3.4375 16.5865H1.5625C1.04492 16.5865 0.625 16.1686 0.625 15.649V13.774C0.625 13.2545 1.04492 12.8365 1.5625 12.8365H3.4375Z" fill="#2D2D37"/> </g> <defs> <clipPath id="clip0_27_2183"> <rect width="20" height="16.9231" fill="white"/> </clipPath> </defs> </svg>`,
  },
  {
    name: 'View as board',
    description: '',
    group: 'Views',
    shortcut: [],
    icon: `<svg class="command-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_27_644)"> <path d="M5.71429 11.4734C5.12054 11.4734 4.64286 10.9969 4.64286 10.4046V5.41665C4.64286 4.82434 5.12054 4.34781 5.71429 4.34781C6.30804 4.34781 6.78571 4.82434 6.78571 5.41665V10.4046C6.78571 10.9969 6.30804 11.4734 5.71429 11.4734ZM13.2143 5.41665C13.2143 4.82434 13.692 4.34781 14.2857 4.34781C14.8795 4.34781 15.3571 4.82434 15.3571 5.41665V13.2548C15.3571 13.8471 14.8795 14.3237 14.2857 14.3237C13.692 14.3237 13.2143 13.8471 13.2143 13.2548V5.41665ZM10 10.0483C9.40625 10.0483 8.92857 9.57177 8.92857 8.97945V5.41665C8.92857 4.82434 9.40625 4.34781 10 4.34781C10.5938 4.34781 11.0714 4.82434 11.0714 5.41665V8.97945C11.0714 9.57177 10.5938 10.0483 10 10.0483ZM0 2.92269C0 1.34838 1.27902 0.0724487 2.85714 0.0724487H17.1429C18.7188 0.0724487 20 1.34838 20 2.92269V17.1739C20 18.746 18.7188 20.0241 17.1429 20.0241H2.85714C1.27902 20.0241 0 18.746 0 17.1739V2.92269ZM2.85714 17.8865H17.1429C17.5357 17.8865 17.8571 17.5658 17.8571 17.1739V2.92269C17.8571 2.529 17.5357 2.21013 17.1429 2.21013H2.85714C2.4625 2.21013 2.14286 2.529 2.14286 2.92269V17.1739C2.14286 17.5658 2.4625 17.8865 2.85714 17.8865Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_27_644"> <rect width="20" height="21" fill="white"/> </clipPath> </defs> </svg> `,
  },
  {
    name: 'View as table',
    description: '',
    group: 'Views',
    shortcut: [],
    icon: `<svg class="command-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_27_649)"> <path d="M17.5 0C18.8789 0 20 1.11914 20 2.5V15C20 16.3789 18.8789 17.5 17.5 17.5H2.5C1.11914 17.5 0 16.3789 0 15V2.5C0 1.11914 1.11914 0 2.5 0H17.5ZM9.0625 9.0625V5H1.875V9.0625H9.0625ZM1.875 10.9375V15C1.875 15.3438 2.15469 15.625 2.5 15.625H9.0625V10.9375H1.875ZM10.9375 15.625H17.5C17.8438 15.625 18.125 15.3438 18.125 15V10.9375H10.9375V15.625ZM18.125 9.0625V5H10.9375V9.0625H18.125Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_27_649"> <rect width="20" height="18" fill="white"/> </clipPath> </defs> </svg> `,
  },
  {
    name: 'Mege nodes',
    description: '',
    group: 'Nodes',
    shortcut: [],
    icon: `<svg class="command-icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_35_955)"> <path d="M0.22998 3.9375C0.22998 3.41992 0.649902 3 1.16748 3H5.86279C6.54248 3 7.18701 3.31875 7.60107 3.86172L11.8511 9.4375C11.8745 9.51562 12.0034 9.5625 12.0972 9.5625H17.0308L15.5034 8.00391C15.1401 7.67188 15.1401 7.07812 15.5034 6.71094C15.8706 6.34766 16.4644 6.34766 16.7964 6.71094L19.9214 9.83594C20.3198 10.2031 20.3198 10.7969 19.9214 11.1289L16.7964 14.2539C16.4644 14.6523 15.8706 14.6523 15.5034 14.2539C15.1401 13.9219 15.1401 13.3281 15.5034 12.9609L17.0308 11.4375H12.0972C12.0034 11.4375 11.8745 11.4844 11.8511 11.5625L7.60107 17.1367C7.18701 17.6797 6.54248 18 5.86279 18H1.16748C0.649902 18 0.22998 17.582 0.22998 17.0625C0.22998 16.543 0.649902 16.125 1.16748 16.125H5.86279C5.95654 16.125 6.05029 16.0781 6.10889 16L10.3003 10.5L6.10889 5C6.05029 4.92187 5.95654 4.875 5.86279 4.875H1.16748C0.649902 4.875 0.22998 4.45703 0.22998 3.9375Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_35_955"> <rect width="20" height="20" fill="white" transform="translate(0.22998 0.5)"/> </clipPath> </defs> </svg> `,
    subcommand: 'merge'
  },
];
const shortcutKeys = [
  {
    name: 'CMD',
    icon: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_41_385)"> <path d="M10.8684 7.99167H9.38632V6.00833H10.8684C12.5054 6.00833 13.8325 4.6764 13.8325 3.03333C13.8325 1.39027 12.5054 0.0583344 10.8684 0.0583344C9.23133 0.0583344 7.90427 1.39027 7.90427 3.03333V4.52083H5.92821V3.03333C5.92821 1.39027 4.60115 0.0583344 2.9641 0.0583344C1.32705 0.0583344 0 1.39027 0 3.03333C0 4.6764 1.32705 6.00833 2.9641 6.00833H4.44615V7.99167H2.9641C1.32705 7.99167 0 9.3236 0 10.9667C0 12.6097 1.32705 13.9417 2.9641 13.9417C4.60115 13.9417 5.92821 12.6097 5.92821 10.9667V9.47917H7.90427V10.9667C7.90427 12.6097 9.23133 13.9417 10.8684 13.9417C12.5054 13.9417 13.8325 12.6097 13.8325 10.9667C13.8325 9.3236 12.5048 7.99167 10.8684 7.99167ZM9.38632 3.03333C9.38632 2.21304 10.0511 1.54583 10.8684 1.54583C11.6857 1.54583 12.3504 2.21304 12.3504 3.03333C12.3504 3.85363 11.6866 4.52083 10.8684 4.52083H9.38632V3.03333ZM4.44615 10.9667C4.44615 11.787 3.78139 12.4542 2.9641 12.4542C2.14681 12.4542 1.48205 11.7879 1.48205 10.9667C1.48205 10.1454 2.14681 9.47917 2.9641 9.47917H4.44615V10.9667ZM4.44615 4.52083H2.9641C2.14681 4.52083 1.48205 3.85456 1.48205 3.03333C1.48205 2.21211 2.14681 1.54583 2.9641 1.54583C3.78139 1.54583 4.44615 2.21211 4.44615 3.03333V4.52083ZM7.90427 7.99167H5.92821V6.00833H7.90427V7.99167ZM10.8684 12.4542C10.0511 12.4542 9.38632 11.787 9.38632 10.9667V9.47917H10.8684C11.6857 9.47917 12.3504 10.1464 12.3504 10.9667C12.3504 11.787 11.6866 12.4542 10.8684 12.4542Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_41_385"> <rect width="14" height="14" fill="white"/> </clipPath> </defs> </svg> `,
  },
  {
    name: 'Shift',
    icon: `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_41_389)"> <path d="M0.0750978 6.88578C0.227715 7.25315 0.587274 7.49395 0.985997 7.49395H3.45105V12.4335C3.45105 13.2519 4.11323 13.9153 4.93008 13.9153H6.90213C7.71867 13.9153 8.38116 13.2516 8.38116 12.4335V7.49395H10.8462C11.2449 7.49395 11.6045 7.25324 11.757 6.88423C11.9097 6.51469 11.8254 6.0902 11.5433 5.80742L6.61316 0.373949C6.42144 0.181308 6.16877 0.0846786 5.9161 0.0846786C5.66344 0.0846786 5.41077 0.181308 5.21973 0.374258L0.289619 5.80773C0.00671725 6.08928 -0.0775506 6.51531 0.0750978 6.88578ZM5.9161 1.77121L9.65682 6.0121H6.90213V12.4335H4.93008V6.0121H2.17631L5.9161 1.77121Z" fill="#4E5061"/> </g> <defs> <clipPath id="clip0_41_389"> <rect width="11.8323" height="14" fill="white"/> </clipPath> </defs> </svg> `
  },  
  {
    name: 'Delete',
    icon: `<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.2208 4.53191L11.8072 6L13.2208 7.44051C13.5329 7.72861 13.5329 8.19447 13.2208 8.45499C12.9607 8.76761 12.4957 8.76761 12.2081 8.45499L10.77 7.039L9.30444 8.45499C9.04437 8.76761 8.5793 8.76761 8.29169 8.45499C8.00714 8.19447 8.00714 7.72861 8.29169 7.44051L9.73279 6L8.29169 4.53191C8.00714 4.2714 8.00714 3.80553 8.29169 3.51743C8.5793 3.23239 9.04437 3.23239 9.30444 3.51743L10.77 4.961L12.2081 3.51743C12.4957 3.23239 12.9607 3.23239 13.2208 3.51743C13.5329 3.80553 13.5329 4.2714 13.2208 4.53191ZM15.6655 0.115387C16.7455 0.115387 17.6237 0.993482 17.6237 2.07693V9.92308C17.6237 11.005 16.7455 11.8846 15.6655 11.8846H6.28149C5.76135 11.8846 5.26262 11.6793 4.89546 11.3115L0.286752 6.69267C0.103141 6.50878 0 6.26052 0 6C0 5.73949 0.103172 5.49123 0.286752 5.30733L4.89546 0.690056C5.26262 0.321961 5.76135 0.115387 6.28149 0.115387H15.6655ZM16.155 2.07693C16.155 1.80721 15.9347 1.58654 15.6655 1.58654H6.28149C6.14993 1.58654 6.02448 1.63864 5.93269 1.73059L1.67149 6L5.93269 10.2694C6.02448 10.3614 6.14993 10.4135 6.28149 10.4135H15.6655C15.9347 10.4135 16.155 10.1928 16.155 9.92308V2.07693Z" fill="#4E5061"/> </svg>`
  },
]


// 
// State
// -----

let state = {
  activeCommand: -1,
  activeParent: -1,
  notification: '',
  help: true,
};


//
// Helpers
// -------

// Ref: https://stackoverflow.com/questions/29896907/bold-part-of-string
// TODO: When searching "view board", "view as board" should display, even though
//       "as" was never typed
// TODO: "Ensure all `<strong></strong>` tags are removed when `reset()` runs"
const boldString = (str, substr) => str.toLowerCase().replaceAll(substr.toLowerCase(), `<strong>${substr}</strong>`);


// 
// Components
// ----------

const descriptionElement = (desc) => {
  if (!desc) return '';
  
  return `
    <span class="command-description">
      ${desc}
    </span>
  `
}

const iconElement = (icon) => {
  if (!icon) return '';
  
  return icon;
}

const shortcutKeysElement = (shortcuts) => {
  if (!shortcuts) return '';
  
  return Object.keys(shortcuts).map((key) => {
    return `
      <span class="shortcut">
        ${shortcutKeys[key].icon}
      </span>
    `
  });
}

const shortcutsElement = (keys) => {
  if (!keys.length) return '';
  
  return `
    <div class="command-shortcuts">
      ${keys}
    </div>
  `
}

const rightArrowElement = (options) => {
  if (!options) return '';
  
  return `<svg class="command-arrow" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_41_300)"> <path d="M19.5804 10.5833C20.1384 10.0187 20.1384 9.10181 19.5804 8.53723L12.4375 1.31067C11.8795 0.746094 10.9732 0.746094 10.4152 1.31067C9.85714 1.87524 9.85714 2.79211 10.4152 3.35669L15.125 8.11719H1.42857C0.638393 8.11719 0 8.76306 0 9.5625C0 10.3619 0.638393 11.0078 1.42857 11.0078H15.1205L10.4196 15.7683C9.86161 16.3329 9.86161 17.2498 10.4196 17.8143C10.9777 18.3789 11.8839 18.3789 12.442 17.8143L19.5848 10.5878L19.5804 10.5833Z" fill="#2D2D37"/> </g> <defs> <clipPath id="clip0_41_300"> <rect width="20" height="19" fill="white"/> </clipPath> </defs> </svg>`
}

const mergeSubcommandElement = () => { 
  return `
    <li class="subcommand">
      <div class="subcommand-group">
        <div class="subcommand-label">
          <span class="subcommand-heading">
            Source nodes
          </span>

          <span class="subcommand-description">
            These will be merged into the target node
          </span>
        </div>
        
        <input class="search" type="text" placeholder="Find nodes">
      </div>

      <div class="subcommand-group">
        <div class="subcommand-label">
          <span class="subcommand-heading">
            Target node
          </span>
        </div>
        
        <input class="search" type="text" placeholder="Find nodes">
      </div>

      <div class="subcommand-action">
        <button class="button -primary">
          Merge
        </button>
      </div>
    </li>
  `
}


// 
// Rendering
// ---------

const renderSubcommand = (command) => {
  if (!command) return false;

  let subcommandHTML;
  list.innerHTML = "";

  switch (command) {
    case 'merge':
      subcommandHTML = mergeSubcommandElement();
      break;
    default:
      break;
  }

  if (subcommandHTML) {
    list.innerHTML = subcommandHTML;
  }
}

const renderCommand = (item, filter = '', index) => {
  const {name, description, group, shortcut, icon, options, subcommand} = item;
  
  return `
    <li class="command" role="button" tabindex="0" data-index="${index}" ${state.activeParent > -1 ? `data-parent="${state.activeParent}"` : ``}>
      ${iconElement(icon)}
      <span class="command-details">
        ${filter ? boldString(name, filter) : name ? name : ''}
        ${descriptionElement(description)}
      </span>
      
      ${rightArrowElement(options) || rightArrowElement(subcommand)}
      ${shortcutsElement(shortcutKeysElement(shortcut))}
    </li>
  `;
}

const render = (items, filter = '') => {
  list.innerHTML = "";
    
  items.forEach((item, index) => {
    list.innerHTML += renderCommand(item, filter, index);
  });
}

//
// Notifications
// -------------

const notificationContents = (text = '') => {
  state.notification = text;
  notification.innerHTML = state.notification;
}

const notificationTrigger = () => {
  const text = commands[state.activeCommand].notification;
  
  if (!text) return false;
  
  notificationContents(text)
  notification.classList.toggle(visibleClass);
  
  setTimeout(() => {
    notification.classList.toggle(visibleClass);
  }, 2000);  
  
  setTimeout(() => {
    notificationContents();
  }, 3000);
}


//
// Interactivity
// -------------

const checkOptions = () => {
  // TODO: Currently, clicking on a child option will set 
  //       `options` to `true`, since we're checking the parent command
  //       for options. We need to check the child command for options.
  //       In the current project, clicking "Merge" then "With tag #" triggers a notification
  const options = commands[state.activeCommand].options;
  
  if (!options) { 
    return false;
  } else {
    return options;
  }
}

const checkSubcommand = () => {
  const subcommand = commands[state.activeCommand].subcommand;
  
  if (!subcommand) { 
    return false;
  } else {
    return subcommand;
  }
}

const triggerCommand = () => {
  // Pass `command` to each of these functions, dictating 
  // which element should be checked for options or subcommands
  const options = checkOptions();
  const subcommand = checkSubcommand();

  if (!options && !subcommand) {
    notificationTrigger();
    close();
    reset();
  } else {
    input.value = commands[state.activeCommand].name;
    input.insertAdjacentHTML('beforebegin', commands[state.activeCommand].icon);
    parentElement.classList.add('-filled-with-icon');
  }
  
  if (options) {
    render(options);
  } else if (subcommand) { 
    renderSubcommand(subcommand);
    parentElement.classList.add('-subcommand-active');
  } else { 
    return false;
  }
}

const move = (direction) => {
  const commandItems = parentElement.querySelectorAll('.command');
  const commandCount = commandItems.length;
  
  if (direction === 'up') {
    if (state.activeCommand >= 0) {
      state.activeCommand++;
    }

    if (!state.activeCommand || state.activeCommand < 0 || state.activeCommand === commandCount) {
      state.activeCommand = 0;
    }
  } else if (direction === 'down') {
    if (state.activeCommand <= 0) {
      state.activeCommand = commandCount - 1;
    } else {
      state.activeCommand--;
    }
  }

  commandItems[state.activeCommand].focus();
}

const open = () => {
  parentElement.classList.toggle(visibleClass);
  root.classList.toggle(overlayClass);
}

const close = () => {
  parentElement.classList.remove(visibleClass);
  root.classList.remove(overlayClass);
}

const reset = () => {
  state.activeCommand = -1;
  input.value = '';
  input.focus();
  list.classList.remove('-scroll');

  const filledWithIconClass = '-filled-with-icon';
  const subcommandActiveClass = '-subcommand-active';
  parentElement.classList.contains(filledWithIconClass) && parentElement.classList.remove(filledWithIconClass);
  parentElement.classList.contains(subcommandActiveClass) && parentElement.classList.remove(subcommandActiveClass);
  const headerIcon = header.querySelector('.command-icon')
  headerIcon && headerIcon.remove();

  render(commands);
}

const eventListeners = () => {
  // Keyboard events
  document.addEventListener('keydown', function(event) {
    // CTRL + K
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      
      open();
      
      if (parentElement.classList.contains(visibleClass)) {
        reset();
      }
    
    // ESC
    } else if (event.keyCode === 27) {
      event.preventDefault();
      close();
    
    // Down arrow
    } else if (event.keyCode === 40) {
      move('up');
    
    // Up arrow
    } else if (event.keyCode === 38) {
      move('down');

    // Left arrow
    } else if (event.keyCode === 37) {
      reset();
    
    // Enter/Right arrow
    } else if (event.keyCode === 13 || event.keyCode === 39) {
      triggerCommand();
      
    // CTRL + H
    } else if (event.ctrlKey && event.key === 'h') {
      help.classList.toggle(a11yHiddenClass);
      list.classList.toggle('-rounded');
    }
  });

  // Filter commands while user types
  input.addEventListener('input', (e) => {
    const filter = e.target.value;
    const filtered = commands.filter(item => {
      const name = item.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    });

    // If input is modified and empty, reset the list
    if (filter.length === 0) {
      reset();
    }
    
    render(filtered, filter);
  });

  // Input is focused
  input.addEventListener('focus', (e) => {
    state.activeCommand = -1;
  });

  // Trigger commands with mouse
  list.addEventListener('click', (e) => {
    const command = e.target.closest('.command');
    state.activeCommand = command.dataset.index;
    triggerCommand();
  });

  // Toggle scroll on hover
  list.addEventListener('mouseover', (e) => {
    if (!list.classList.contains('-scroll')) {
      list.classList.add('-scroll');
    }
  });

  list.addEventListener('mouseout', (e) => {
    if (list.classList.contains('-scroll')) {
      list.classList.remove('-scroll');
    }
  });

  // Show/hide help items
  helpGuide.addEventListener('mouseover', (e) => {
    if (state.help) {
      document.querySelectorAll('.commandPalette-help-item').forEach(item => item.classList.add(hiddenClass));
    }
  });

  helpGuide.addEventListener('mouseout', (e) => {
    if (state.help) {
      document.querySelectorAll('.commandPalette-help-item').forEach(item => item.classList.remove(hiddenClass));
    }
  });
};

const init = () => { 
  eventListeners();
  render(commands);
}


// 
// Initialize
// ----------

window.onLoad = init();
class NewNavBody {
    constructor(navList) {
        this.navList = navList;

        this.result = this.result.bind(this);
    }

    // -------------------------------------
    //   Get navItem classname
    // -------------------------------------

    getNavItemClassName = (itemType) => {
        switch (itemType) {
            case 'index':
                return 'index-collection';
            case 'page':
                return 'page-collection';
            case 'folders':
                return 'folders-collection folder';
            case 'external':
                return 'external-link';
            default:
                console.warn(`Get unknown nav item type: ${itemType}`);
                return '';
        }
    }

    // -------------------------------------
    //   new nav item's element
    // -------------------------------------

    newNormalNavItemElement = (navItem) => {
        const linkTarget = navItem.type === 'external' ? '_blank' : '_self';
        const navItemClassname = this.getNavItemClassName(navItem.type);

        return `
            <li class="${navItemClassname}">
                <a href="${navItem.link}" target="${linkTarget}">
                    <span>${navItem.name}</span>
                </a>
            </li>
        `;
    }

    newFoldersNavItemElement = (navItem) => {
        const navItemClassname = this.getNavItemClassName(navItem.type);

        // folder toggle ID
        const randomId = (`${Math.random()}`).substring(2);
        const folderToggleId = `folder-toggle-${randomId}`;

        // Sub navItem elements
        const subNavElements = navItem.links.map(subNavItem => `
            <li>
                <a href="${subNavItem.link}">
                    <span>${subNavItem.name}</span>
                </a>
            </li>
        `);

        return `
            <li class="${navItemClassname}">
                <div class="folder-parent">
                    <input
                        type="checkbox"
                        class="folder-toggle-box hidden"
                        name="${folderToggleId}"
                        id="${folderToggleId}" />
                    <label for="${folderToggleId}" class="folder-toggle-label">
                        <a aria-haspopup="true">
                            <span>${navItem.name}</span>
                        </a>
                    </label>
                    <div class="folder-child-wrapper">
                        <ul class="folder-child">
                            ${subNavElements.join('')}
                        </ul>
                    </div>
                </div>
            </li>
        `;
    }

    // -------------------------------------
    //   Result
    // -------------------------------------

    result() {
        const resultArray = this.navList.map((navItem) => {
            switch (navItem.type) {
                case 'folders':
                    return this.newFoldersNavItemElement(navItem);
                default:
                    return this.newNormalNavItemElement(navItem);
            }
        });

        return resultArray.join('');
    }
}

export default NewNavBody;

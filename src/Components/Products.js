<body>
    <ul id="tabList">
        <li class="tab" data-tab="tab1">Tab 1</li>
        <li class="tab" data-tab="tab2">Tab 2</li>
        <li class="tab" data-tab="tab3">Tab 3</li>
    </ul>

    <div id="tabContent">
        <div id="tab1" class="tab-panel">
            <h2>Tab 1 Content</h2>
            <p>This is the content for Tab 1.</p>
        </div>
        <div id="tab2" class="tab-panel">
            <h2>Tab 2 Content</h2>
            <p>This is the content for Tab 2.</p>
        </div>
        <div id="tab3" class="tab-panel">
            <h2>Tab 3 Content</h2>
            <p>This is the content for Tab 3.</p>
        </div>
    </div>

    <script>
        const tabs = document.querySelectorAll('.tab');
        const tabPanels = document.querySelectorAll('.tab-panel');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabPanels.forEach(panel => panel.style.display = 'none');
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'block';
            });
        });
        
        // Set the initial active tab
        tabs[0].click();
    </script>
</body>

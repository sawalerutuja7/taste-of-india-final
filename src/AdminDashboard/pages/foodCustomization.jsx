import React, { useState } from 'react';

const FoodCustomizationPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    spiceLevel: 'medium',
    preferences: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    ingredients: {
      extraCheese: false,
      extraVegetables: false,
      extraProtein: false
    }
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSpiceLevelChange = (level) => {
    setSelectedOptions({
      ...selectedOptions,
      spiceLevel: level
    });
  };

  const handleCheckboxChange = (category, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: {
        ...selectedOptions[category],
        [option]: !selectedOptions[category][option]
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-orange-500 p-6">
            <h1 className="text-2xl font-bold text-white">Food Customization</h1>
            <p className="text-white opacity-90 mt-2">Personalize your food preferences and dietary requirements</p>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {/* Dropdown Toggle */}
            <div className="mb-6">
              <button 
                onClick={toggleDropdown} 
                className="w-full flex items-center justify-between px-4 py-3 bg-orange-100 hover:bg-orange-200 rounded-md transition-colors"
              >
                <span className="font-medium text-orange-800">Customize your food</span>
                <svg 
                  className={`w-5 h-5 text-orange-800 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="mt-3 p-4 bg-orange-50 rounded-md border border-orange-200">
                  {/* Spice Level Section */}
                  <div className="mb-6">
                    <h3 className="font-medium text-orange-800 mb-3">• Spice Level</h3>
                    <div className="flex flex-wrap gap-3 ml-6">
                      {['mild', 'medium', 'spicy', 'extra spicy'].map((level) => (
                        <label key={level} className="flex items-center">
                          <input
                            type="radio"
                            name="spiceLevel"
                            checked={selectedOptions.spiceLevel === level}
                            onChange={() => handleSpiceLevelChange(level)}
                            className="form-radio text-orange-500 focus:ring-orange-500"
                          />
                          <span className="ml-2 capitalize">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Preferences */}
                  <div className="mb-6">
                    <h3 className="font-medium text-orange-800 mb-3">• Dietary Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
                      {Object.keys(selectedOptions.preferences).map((preference) => (
                        <label key={preference} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedOptions.preferences[preference]}
                            onChange={() => handleCheckboxChange('preferences', preference)}
                            className="form-checkbox text-orange-500 focus:ring-orange-500 h-5 w-5"
                          />
                          <span className="ml-2 capitalize">{preference.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Extra Ingredients */}
                  <div className="mb-6">
                    <h3 className="font-medium text-orange-800 mb-3">• Extra Ingredients</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-6">
                      {Object.keys(selectedOptions.ingredients).map((ingredient) => (
                        <label key={ingredient} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedOptions.ingredients[ingredient]}
                            onChange={() => handleCheckboxChange('ingredients', ingredient)}
                            className="form-checkbox text-orange-500 focus:ring-orange-500 h-5 w-5"
                          />
                          <span className="ml-2 capitalize">{ingredient.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Food Allergies */}
                  <div className="mb-6">
                    <h3 className="font-medium text-orange-800 mb-3">• Food Allergies</h3>
                    <div className="ml-6">
                      <textarea 
                        placeholder="Please list any food allergies here..."
                        className="w-full p-3 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Section */}
            <div className="bg-orange-50 p-4 rounded-md">
              <h3 className="font-medium text-orange-800 mb-3">Your Current Preferences</h3>
              <ul className="ml-4 space-y-2">
                <li>• <span className="font-medium">Spice Level:</span> <span className="capitalize">{selectedOptions.spiceLevel}</span></li>
                <li>• <span className="font-medium">Dietary Preferences:</span> {Object.keys(selectedOptions.preferences).filter(pref => selectedOptions.preferences[pref]).map(pref => pref.replace(/([A-Z])/g, ' $1').trim()).join(', ') || 'None selected'}</li>
                <li>• <span className="font-medium">Extra Ingredients:</span> {Object.keys(selectedOptions.ingredients).filter(ing => selectedOptions.ingredients[ing]).map(ing => ing.replace(/([A-Z])/g, ' $1').trim()).join(', ') || 'None selected'}</li>
              </ul>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-md transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCustomizationPage;
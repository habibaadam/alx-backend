#!/usr/bin/env python3
"""module that contains basic caching"""


from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """class for caching system"""
    def __init__(self):
        """initializes the class"""
        super().__init__()

    def put(self, key, item):
        """ Add an item in the cache"""
        if key is None or item is None:
            return
        self.cache_data.update({key: item})

    def get(self, key):
        """Get an item by key"""
        return self.cache_data.get(key)

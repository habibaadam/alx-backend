#!/usr/bin/env python3
"""module that contains mru caching system"""


from base_caching import BaseCaching
from datetime import datetime


class MRUCache(BaseCaching):
    """class for lru caching"""

    def __init__(self):
        """initializes the class"""
        super().__init__()
        self.cache_data_time = {}

    def put(self, key, item):
        """Add an item in the cache
        """
        if key is None or item is None:
            return
        if len(self.cache_data) == BaseCaching.MAX_ITEMS \
                and key not in self.cache_data.keys():
            removed_item = max(self.cache_data_time,
                               key=self.cache_data_time.get)

            del self.cache_data_time[removed_item]
            del self.cache_data[removed_item]
            print(f"DISCARD: {removed_item}")

        self.cache_data.update({key: item})
        self.cache_data_time.update({key: datetime.today()})

    def get(self, key):
        """Get an item in the cache
        """
        if self.cache_data.get(key) is None:
            return
        self.cache_data_time.update({key: datetime.today()})
        return self.cache_data.get(key)
